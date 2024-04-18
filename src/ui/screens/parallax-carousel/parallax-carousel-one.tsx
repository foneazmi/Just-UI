import React, { useRef } from "react";
import { Image, View, Animated } from "react-native";
import { Back, Layout } from "~/ui/components";
import { width } from "~/helpers";
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

const avatar = (id: number) =>
  `https://randomuser.me/api/portraits/women/${id}.jpg`;

const DATA = [
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
];

export const ParallaxCarouselOneScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Layout>
      <Back />
      <Animated.FlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7],
          });
          return (
            <View
              style={{ width, justifyContent: "center", alignItems: "center" }}
            >
              <View
                style={{
                  borderRadius: 18,
                  shadowColor: "#000",
                  shadowOpacity: 0.5,
                  shadowRadius: 30,
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  padding: 10,
                  backgroundColor: "white",
                }}
              >
                <View
                  style={{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                    overflow: "hidden",
                    alignItems: "center",
                    borderRadius: 14,
                  }}
                >
                  <Animated.Image
                    source={{ uri: item.image }}
                    style={{
                      width: ITEM_WIDTH * 1.4,
                      height: ITEM_HEIGHT,
                      resizeMode: "cover",
                      transform: [
                        {
                          translateX,
                        },
                      ],
                    }}
                  />
                </View>

                <Image
                  source={{ uri: avatar(index + 1) }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 60,
                    borderWidth: 6,
                    borderColor: "white",
                    position: "absolute",
                    bottom: -30,
                    right: 60,
                    resizeMode: "contain",
                  }}
                />
              </View>
            </View>
          );
        }}
      />
    </Layout>
  );
};
