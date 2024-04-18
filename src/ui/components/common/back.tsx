import { Feather } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";

import { navigator } from "~/helpers";

interface Props {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  color?: string;
}
export const Back = (props: Props) => {
  return (
    <Pressable
      onPress={() => navigator.goBack()}
      style={{
        position: "absolute",
        top: props.top || 40,
        left: props.left || 20,
        right: props.right || 0,
        bottom: props.bottom || 0,
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99,
      }}
    >
      <Feather name="x" size={20} color={props.color || "black"} />
    </Pressable>
  );
};
