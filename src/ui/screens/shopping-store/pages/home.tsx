import { memo, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Layout } from "~/ui/components";
import { width } from "~/helpers";

const ImageUrl =
  "https://images.unsplash.com/photo-1622445275649-b1922cc3e837?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Header = memo(() => (
  <View
    style={{ flexDirection: "row", alignItems: "center", marginVertical: 12 }}
  >
    <View style={{ gap: 4, flex: 1 }}>
      <Text style={{ color: "gray" }}>Location</Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <MaterialCommunityIcons name="map-marker" size={20} />
        <Text style={{ fontWeight: "600" }}>Cairo, Egypt</Text>
        <MaterialCommunityIcons name="chevron-down" size={20} />
      </View>
    </View>
    <MaterialCommunityIcons name="bell-outline" size={24} />
  </View>
));

const Category = memo((props: any) => {
  return (
    <Pressable style={{ alignItems: "center" }} onPress={props.onPress}>
      <Text
        style={{
          fontWeight: props.isSelected ? "bold" : "500",
        }}
      >
        {props.label}
      </Text>
      <View
        style={{
          height: 5,
          width: 5,
          borderRadius: 20,
          marginTop: 2,
          backgroundColor: props.isSelected ? "black" : "transparent",
        }}
      />
    </Pressable>
  );
});

const DATA = ["All", "Abaya", "Scarf", "Kaftan", "Dresses"];

const Categories = memo(({ selected, setSelected }: any) => {
  return (
    <FlatList
      horizontal
      style={{ marginTop: 20 }}
      contentContainerStyle={{ gap: 16 }}
      keyExtractor={(item, index) => `${item}--${index}`}
      data={DATA}
      renderItem={({ item, index }) => (
        <Category
          isSelected={index === selected}
          label={item}
          onPress={() => setSelected(index)}
        />
      )}
    />
  );
});

const Tagline = memo(() => (
  <View
    style={{
      marginVertical: 20,
    }}
  >
    <Text
      style={{
        fontWeight: "bold",
        fontSize: 28,
      }}
    >
      Find The Best Abaya
    </Text>
    <Text
      style={{
        fontWeight: "bold",
        fontSize: 28,
      }}
    >
      That Fits You
    </Text>
  </View>
));

const SearchButton = memo(() => (
  <View
    style={{
      flexDirection: "row",
      paddingHorizontal: 16,
      padding: 10,
      alignItems: "center",
      gap: 4,
      borderRadius: 10,
      backgroundColor: "#F5F5F5",
    }}
  >
    <MaterialCommunityIcons name="magnify" size={20} />
    <Text>Search Here</Text>
  </View>
));
const Item = () => {
  return (
    <View style={{ flex: 1, padding: 8 }}>
      <Image
        source={{ uri: ImageUrl }}
        style={{
          flex: 1,
          height: 300,
          borderRadius: 10,
        }}
      />
      <View>
        <Text style={{ fontWeight: "700", fontSize: 12 }}>Some T-shirt</Text>
        <Text>Rp. 100,000</Text>
      </View>
    </View>
  );
};
export const ShoppingStoreHomePage = () => {
  const [selected, setSelected] = useState(0);
  return (
    <Layout
      style={{
        backgroundColor: "white",
        paddingHorizontal: 16,
      }}
    >
      <Header />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: -16, paddingHorizontal: 8 }}
        ListHeaderComponent={
          <View style={{ marginHorizontal: 8, marginBottom: 16 }}>
            <Tagline />
            <SearchButton />
            <Categories selected={selected} setSelected={setSelected} />
          </View>
        }
        keyExtractor={(item, index) => `${item}--${index}--item`}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        numColumns={2}
        renderItem={() => <Item />}
      />
    </Layout>
  );
};
