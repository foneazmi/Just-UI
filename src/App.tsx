import React from "react";
import { enableFreeze } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./helpers";
import { Router } from "./router";
enableFreeze(true);

export const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Router />
    </NavigationContainer>
  );
};
