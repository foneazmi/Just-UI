import { memo, useEffect, useMemo } from "react";
import {
  ComingSoonScreen,
  LinkAjaScreen,
  ShoppingStoreScreen,
  ParallaxCarouselOneScreen,
  ParallaxCarouselTwoScreen,
  FlatListAnimationOneScreen,
  FlatListAnimationTwoScreen,
  HelloAnimationOneScreen,
  HelloAnimationTwoScreen,
  JustUIScreen,
  HelloAnimationThreeScreen,
} from "./ui/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useApp } from "./stores";
const Stack = createNativeStackNavigator();

const routes = [
  {
    hide: true,
    path: "just-ui",
    component: JustUIScreen,
  },
  {
    title: "Link Aja (Old UI)",
    path: "link-aja",
    component: LinkAjaScreen,
  },
  {
    title: "Shopping Store",
    path: "shopping-store",
    component: ShoppingStoreScreen,
  },
  {
    title: "Parallax Carousel 1",
    path: "parallax-carousel-1",
    component: ParallaxCarouselOneScreen,
  },
  {
    title: "Parallax Carousel 2",
    path: "parallax-carousel-2",
    component: ParallaxCarouselTwoScreen,
  },
  {
    title: "FlatList Animation 1",
    path: "flat-list-animation-1",
    component: FlatListAnimationOneScreen,
  },
  {
    title: "FlatList Animation 2",
    path: "flat-list-animation-2",
    component: FlatListAnimationTwoScreen,
  },
  {
    title: "Hello Animation 1",
    path: "hello-animation-one",
    component: HelloAnimationOneScreen,
  },
  {
    title: "Hello Animation 2",
    path: "hello-animation-two",
    component: HelloAnimationTwoScreen,
  },
  {
    title: "Hello Animation 3",
    path: "hello-animation-three",
    component: HelloAnimationThreeScreen,
  },
  {
    title: "Coming Soon",
    path: "coming-soon",
    component: ComingSoonScreen,
  },
];

export const Router = memo(() => {
  const { setPaths } = useApp();

  useEffect(() => {
    const paths = routes
      .filter((route) => !route.hide)
      .map((route) => ({ title: route.title, path: route.path }));
    setPaths(paths);
  }, [routes]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    >
      {routes.map((route) => (
        <Stack.Screen
          name={route.path}
          component={route.component}
          key={route.path}
        />
      ))}
    </Stack.Navigator>
  );
});
