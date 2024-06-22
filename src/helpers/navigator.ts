import { createRef } from "react";
import {
  CommonActions,
  StackActions,
  DrawerActions,
  TabActions,
} from "@react-navigation/native";
import type { NavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createRef<NavigationContainerRef<any>>();

///CommonActions
const navigate = (...args: Parameters<typeof CommonActions.navigate>) => {
  navigationRef.current?.dispatch(CommonActions.navigate(...args));
};
const reset = (...args: Parameters<typeof CommonActions.reset>) => {
  navigationRef.current?.dispatch(CommonActions.reset(...args));
};
const goBack = () => {
  navigationRef.current?.dispatch(CommonActions.goBack());
};

const setParams = (...args: Parameters<typeof CommonActions.setParams>) => {
  navigationRef.current?.dispatch(CommonActions.setParams({ ...args }));
};

///StackActions
const replace = (...args: Parameters<typeof StackActions.replace>) => {
  navigationRef.current?.dispatch(StackActions.replace(...args));
};
const push = (...args: Parameters<typeof StackActions.push>) => {
  navigationRef.current?.dispatch(StackActions.push(...args));
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
const drawerJumpTo = (...args: Parameters<typeof DrawerActions.jumpTo>) => {
  navigationRef.current?.dispatch(DrawerActions.jumpTo(...args));
};

///TabActions
const jumpTo = (...args: Parameters<typeof TabActions.jumpTo>) => {
  navigationRef.current?.dispatch(TabActions.jumpTo(...args));
};

///CustomActions
const resetTo = (name: string, index = 0) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({ index, routes: [{ name }] })
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
  drawerJumpTo,

  ///TabActions
  jumpTo,

  ///CustomActions
  resetTo,
};
