import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { Layout } from "~/ui/components";
import { navigator, width } from "~/helpers";
import { useApp } from "~/stores";

export const JustUIScreen = ({ route }: any) => {
  const { paths } = useApp();

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
        data={paths}
        numColumns={4}
        contentContainerStyle={{ padding: 8 }}
        renderItem={({ item }) => {
          const itemSize = width / 4 - 4;
          return (
            <View
              style={{
                width: itemSize,
                height: itemSize,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Pressable
                onPress={() => navigator.navigate(item.path)}
                style={{
                  height: (itemSize * 9) / 10,
                  width: (itemSize * 9) / 10,
                  padding: 8,
                  borderRadius: 10,
                  backgroundColor: "#EBE3D5",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#191717", textAlign: "center" }}>
                  {item.title}
                </Text>
              </Pressable>
            </View>
          );
        }}
      />
    </Layout>
  );
};
