import React from 'react';
import {
  CommonActions,
  StackActions,
  DrawerActions,
  TabActions,
} from '@react-navigation/native';
const {multiply} = Animated;
import {Animated} from 'react-native';

export const navigationRef: React.RefObject<any> = React.createRef();

///CommonActions
const navigate = (...args: any) => {
  navigationRef.current?.dispatch(
    CommonActions.navigate(...(args as [any, any])),
  );
};

const reset = (...args: any) => {
  navigationRef.current?.dispatch(CommonActions.reset({...args}));
};
const goBack = () => {
  navigationRef.current?.dispatch(CommonActions.goBack());
};

const setParams = (...args: any) => {
  navigationRef.current?.dispatch(CommonActions.setParams({...args}));
};

///StackActions
const replace = (...args: any) => {
  navigationRef.current?.dispatch(
    StackActions.replace(...(args as [any, any])),
  );
};
const push = (...args: any) => {
  navigationRef.current?.dispatch(StackActions.push(...(args as [any, any])));
};
const pop = (count = 1) => {
  navigationRef.current?.dispatch(StackActions.pop(count));
};
const popToTop = () => {
  navigationRef.current?.dispatch(StackActions.popToTop());
};

///DrawerActions
const openDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
};
const closeDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());
};
const toggleDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
};

///TabActions
const jumpTo = (...args: any) => {
  navigationRef.current?.dispatch(TabActions.jumpTo(...(args as [any, any])));
};

///CustomActions
const resetTo = (name: string, index = 0) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({index, routes: [{name}]}),
  );
};

export const navigator = {
  ///CommonActions
  navigate,
  reset,
  goBack,
  setParams,

  ///StackActions
  replace,
  push,
  pop,
  popToTop,

  ///DrawerActions
  openDrawer,
  closeDrawer,
  toggleDrawer,

  ///TabActions
  jumpTo,

  ///CustomActions
  resetTo,
};

export const forFade = ({current}: any) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const TransitionIOSSpec = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 10,
    restSpeedThreshold: 10,
  },
};

export const forHorizontalIOS = ({
  current,
  next,
  inverted,
  layouts: {screen},
}: any) => {
  const translateFocused = multiply(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [screen.width, 0],
      extrapolate: 'clamp',
    }),
    inverted,
  );

  const translateUnfocused = next
    ? multiply(
        next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, screen.width * -0.3],
          extrapolate: 'clamp',
        }),
        inverted,
      )
    : 0;

  const overlayOpacity = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.07],
    extrapolate: 'clamp',
  });

  const shadowOpacity = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.3],
    extrapolate: 'clamp',
  });

  return {
    cardStyle: {
      transform: [
        // Translation for the animation of the current card
        {translateX: translateFocused},
        // Translation for the animation of the card on top of this
        {translateX: translateUnfocused},
      ],
    },
    overlayStyle: {opacity: overlayOpacity},
    shadowStyle: {shadowOpacity},
  };
};

export const SlideFromRightIOS = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionIOSSpec,
    close: TransitionIOSSpec,
  },
  cardStyleInterpolator: forHorizontalIOS,
  headerStyleInterpolator: forFade,
};
