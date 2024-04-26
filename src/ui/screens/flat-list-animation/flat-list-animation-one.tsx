import React, { useRef } from "react";
import {
  Image,
  View,
  Animated,
  StyleSheet,
  Text,
  Platform,
  FlatList,
} from "react-native";
import { Back, Layout } from "~/ui/components";
import { height, width } from "~/helpers";
import { LinearGradient } from "expo-linear-gradient";

const SPACING = 10;
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;
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

export const FlatListAnimationOneScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Layout barStyle="light" overflow style={{ backgroundColor: "black" }}>
      <Back color="white" top={50} />
      {/* <Backdrop movies={DATA} scrollX={scrollX} /> */}
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={DATA}
        keyExtractor={(item, index) => `${index}-flat-list`}
        horizontal
        // bounces={false}
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
            outputRange: [100, 50, 100],
            extrapolate: "clamp",
          });

          return (
            <View style={{ width: ITEM_SIZE }}>
              <Animated.View
                style={{
                  marginHorizontal: SPACING,
                  padding: SPACING * 2,
                  alignItems: "center",
                  transform: [{ translateY }],
                  backgroundColor: "white",
                  borderRadius: 34,
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.posterImage}
                />

                <Text style={{ fontSize: 24 }} numberOfLines={1}>
                  xxxxxxxx
                </Text>

                <Text style={{ fontSize: 12 }} numberOfLines={3}>
                  {item.image}
                </Text>
              </Animated.View>
            </View>
          );
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  posterImage: {
    width: "100%",
    height: ITEM_SIZE * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});

// const Backdrop = ({ movies, scrollX }) => {
//   return (
//     <View style={{ height: BACKDROP_HEIGHT, width, position: "absolute" }}>
//       <FlatList
//         data={movies.reverse()}
//         keyExtractor={(item) => item.key + "-backdrop"}
//         removeClippedSubviews={false}
//         contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
//         renderItem={({ item, index }) => {
//           if (!item.image) {
//             return null;
//           }
//           const translateX = scrollX.interpolate({
//             inputRange: [
//               //
//               (index - 2) * ITEM_SIZE,
//               (index - 1) * ITEM_SIZE,
//             ],
//             outputRange: [0, width],
//             // extrapolate:'clamp'
//           });
//           return (
//             <Animated.View
//               removeClippedSubviews={false}
//               style={{
//                 position: "absolute",
//                 width: translateX,
//                 height,
//                 overflow: "hidden",
//               }}
//             >
//               <Image
//                 source={{ uri: item.image }}
//                 style={{
//                   width: width,
//                   height: BACKDROP_HEIGHT,
//                   position: "absolute",
//                   left: 0,
//                   right: 0,
//                 }}
//               />
//             </Animated.View>
//           );
//         }}
//       />
//       <LinearGradient
//         colors={["rgba(0, 0, 0, 0)", "black"]}
//         style={{
//           height: BACKDROP_HEIGHT,
//           width,
//           position: "absolute",
//           bottom: 0,
//         }}
//       />
//     </View>
//   );
// };
