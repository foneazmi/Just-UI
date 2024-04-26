import React from "react";
import { FlatList, Pressable, Text } from "react-native";
import { Layout } from "~/ui/components";
import { navigator } from "~/helpers";

const DATA = [
  //
  {
    title: "Link Aja (Old UI)",
    route: "link-aja",
  },
  {
    title: "Shopping Store",
    route: "shopping-store",
  },
  // {
  //   title: "Coming Soon",
  //   route: "coming-soon",
  // },
  {
    title: "Parallax Carousel 2",
    route: "parallax-carousel-1",
  },
  {
    title: "Parallax Carousel 2",
    route: "parallax-carousel-2",
  },
  {
    title: "FlatList Animation 1",
    route: "flat-list-animation-1",
  },
  {
    title: "FlatList Animation 2",
    route: "flat-list-animation-2",
  },
];

export const JustUIScreen = () => {
  return (
    <Layout>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          padding: 8,
          fontSize: 20,
        }}
      >
        Just UI
      </Text>
      <FlatList
        data={DATA}
        numColumns={2}
        style={{ paddingHorizontal: 4 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigator.navigate(item.route)}
            style={{
              flex: 1,
              marginHorizontal: 4,
              marginTop: 8,
              backgroundColor: "#EBE3D5",
              padding: 16,
            }}
          >
            <Text
              numberOfLines={1}
              style={{ color: "#191717", textAlign: "center" }}
            >
              {item.title}
            </Text>
          </Pressable>
        )}
      />
    </Layout>
  );
};
