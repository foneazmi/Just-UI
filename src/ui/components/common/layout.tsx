import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";

import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { Back } from "./back";

interface Props {
  children: ReactNode;
  style?: ViewStyle;
  overflow?: Boolean;
  barStyle?: "dark" | "light";
  back?: Boolean;
}
export const Layout = (props: Props) => {
  return (
    <View
      style={[
        {
          flex: 1,
          paddingTop: !props.overflow ? Constants.statusBarHeight : 0,
        },
        props?.style,
      ]}
    >
      <StatusBar
        style={props.barStyle || "dark"}
        backgroundColor="transparent"
        translucent
      />
      {props.back && <Back />}
      {props.children}
    </View>
  );
};
