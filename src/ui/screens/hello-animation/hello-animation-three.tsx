import { Feather } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { width } from "~/helpers";
import { Layout } from "~/ui/components";

const AnimatedIcon = Animated.createAnimatedComponent(Feather);
export const HelloAnimationThreeScreen = () => {
  const sv = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sv.value * 360}deg` }],
  }));

  return (
    <Layout back>
      <AnimatedIcon
        size={75}
        name="settings"
        style={[animatedStyle, { position: "absolute", right: 30, bottom: 30 }]}
      />
      <FlatList
        data={[1, 2, 3, 4, 5]}
        onScrollAnimationEnd={() => {
          //
        }}
        onScroll={(event: any) => {
          sv.value = event.nativeEvent.contentOffset.y / 500;
          // console.log("event", event.nativeEvent.contentOffset);
        }}
        renderItem={({ item }) => (
          <View
            style={{
              height: 100,
              width,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{item}</Text>
          </View>
        )}
      />
    </Layout>
  );
};
