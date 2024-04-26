import React, { useRef } from "react";
import { Image, View, Animated, Platform } from "react-native";
import { Back, Layout } from "~/ui/components";
import { width } from "~/helpers";

const SPACING = 10;
const ITEM_SIZE = width * 0.65;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
// const BACKDROP_HEIGHT = height * 0.65;

const DATA = [
  { key: "empty-left" },
  {
    image:
      "https://images.unsplash.com/photo-1703769605302-ef8633639ba4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Raja Ampat",
    subName: "Papua Barat",
  },
  {
    image:
      "https://images.unsplash.com/photo-1604500693431-647f9e76dafc?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Nusa Penida",
    subName: "Bali",
  },
  {
    image:
      "https://images.unsplash.com/photo-1683610960458-2ea0a7877cee?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Pulau Padar",
    subName: "Nusa Tenggara Timur",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555058170-94d5f5016a2c?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Kawah Ijen",
    subName: "Jawa Timur",
  },
  { key: "empty-right" },
];

export const FlatListAnimationTwoScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Layout barStyle="light" overflow style={{ backgroundColor: "black" }}>
      <Back color="white" top={50} />
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={DATA}
        keyExtractor={(_, index) => `${index}-flat-list`}
        horizontal
        decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{ alignItems: "center" }}
        snapToInterval={ITEM_SIZE}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          if (!item.image) {
            return <View style={{ width: EMPTY_ITEM_SIZE }} />;
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [25, -25, 25],
            extrapolate: "clamp",
          });

          const rotate = scrollX.interpolate({
            inputRange,
            outputRange: ["20deg", "0deg", "-20deg"],
            extrapolate: "clamp",
          });

          return (
            <View style={{ width: ITEM_SIZE }}>
              <Animated.View
                style={{
                  marginHorizontal: SPACING,
                  padding: SPACING,
                  alignItems: "center",
                  transform: [{ translateY }, { rotate }],
                  backgroundColor: "white",
                  borderRadius: 34,
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: "100%",
                    height: ITEM_SIZE * 1.5,
                    resizeMode: "cover",
                    borderRadius: 24,
                    margin: 0,
                  }}
                />
              </Animated.View>
            </View>
          );
        }}
      />
    </Layout>
  );
};
