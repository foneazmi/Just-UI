import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { Layout } from "~/ui/components";

const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

export const HelloAnimationTwoScreen = () => {
  const sv = useSharedValue(0);

  React.useEffect(() => {
    sv.value = withRepeat(withTiming(1, { duration, easing }), -1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sv.value * 360}deg` }],
  }));

  return (
    <Layout back style={{ justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        style={[
          {
            backgroundColor: "red",
            height: 40,
            width: 40,
          },
          animatedStyle,
        ]}
      />
    </Layout>
  );
};
