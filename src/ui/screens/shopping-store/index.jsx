import React, { useCallback } from "react";
import { Platform, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { ShoppingStoreHomePage } from "./pages/home";
import { navigator } from "~/helpers";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ShoppingStoreBlankPage } from "./pages/blank";

const Tab = createBottomTabNavigator();

const Icon = (props) => {
  const { isFocused, route, color } = props;

  const att = {
    home: isFocused ? "home-variant" : "home-variant-outline",
    app: isFocused ? "apps-box" : "apps",
    bag: isFocused ? "shopping" : "shopping-outline",
    back: isFocused
      ? "arrow-left-drop-circle"
      : "arrow-left-drop-circle-outline",
  };

  return <MaterialCommunityIcons name={att[route]} color={color} size={24} />;
};

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        elevation: 20,
        borderColor: "#F0F0F0",
        borderWidth: 1,
        backgroundColor: "white",
        paddingTop: 16,
        paddingBottom: Platform.OS === "ios" ? 36 : 16,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const { title } = options;
        const isFocused = state.index === index;

        const onPress = useCallback(() => {
          if (route.name === "back") {
            navigator.resetTo("just-ui");
          } else {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          }
        }, [isFocused, route.name]);

        return (
          <Pressable
            key={`${title}${index}`}
            onPress={onPress}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Icon
              route={route.name}
              isFocused={isFocused}
              color={isFocused ? "black" : "gray"}
            />
          </Pressable>
        );
      })}
    </View>
  );
};

export const ShoppingStoreScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="home" component={ShoppingStoreHomePage} />
      <Tab.Screen name="bag" component={ShoppingStoreBlankPage} />
      <Tab.Screen name="app" component={ShoppingStoreBlankPage} />
      <Tab.Screen name="back" component={ShoppingStoreBlankPage} />
    </Tab.Navigator>
  );
};
