import React, { useRef } from "react";
import { Animated, Text, Image, View, Pressable } from "react-native";
import { Layout } from "~/ui/components";
import { height, navigator, width } from "~/helpers";
import { Feather } from "@expo/vector-icons";

const headerHeight = 50;
const walletHeight = 200;
const paymentHeight = 80;

export const LinkAjaScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const translateHeader = scrollY.interpolate({
    inputRange: [0, walletHeight + paymentHeight],
    outputRange: [0, walletHeight + paymentHeight],
  });

  const translateWallet = scrollY.interpolate({
    inputRange: [0, walletHeight + paymentHeight],
    outputRange: [0, headerHeight + walletHeight - 16],
  });
  const translatePayment = scrollY.interpolate({
    inputRange: [0, walletHeight + paymentHeight],
    outputRange: [0, paymentHeight],
  });

  const Header = () => (
    <Animated.View
      style={[
        {
          backgroundColor: "white",
          height: headerHeight,
          width,
          position: "absolute",
          top: 0,
          alignItems: "center",
          paddingHorizontal: 16,
          flexDirection: "row",
        },
        { transform: [{ translateY: translateHeader }] },
      ]}
    >
      <Pressable style={{ marginRight: 8 }} onPress={() => navigator.goBack()}>
        <Feather name="chevron-left" size={20} />
      </Pressable>
      <Image
        style={{
          height: headerHeight - 16,
          width: headerHeight - 16,
          borderRadius: headerHeight - 16,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1509839862600-309617c3201e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
        }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 14,
          marginLeft: 8,
        }}
      >
        Farkhan Azmi
      </Text>
    </Animated.View>
  );
  const Wallet = () => (
    <Animated.View
      style={[
        {
          width,
          height: walletHeight,
          position: "absolute",
          backgroundColor: "#D81E1F",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          padding: 16,
          bottom: paymentHeight - headerHeight,
        },
        { transform: [{ translateY: translateWallet }] },
      ]}
    >
      <Text
        style={{
          color: "white",
        }}
      >
        Wallet
      </Text>
    </Animated.View>
  );

  const Payment = () => (
    <Animated.View
      style={[
        {
          width,
          backgroundColor: "#F7F6FC",
          position: "absolute",
          borderTopLeftRadius: 16,
          padding: 16,
          bottom: 0,
          borderTopRightRadius: 16,
          height: paymentHeight,
        },
        { transform: [{ translateY: translatePayment }] },
      ]}
    >
      <Text>Payment</Text>
    </Animated.View>
  );

  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
          }
        )}
      >
        <View
          style={{
            height: walletHeight + paymentHeight,
          }}
        >
          <Header />
          <Wallet />
          <Payment />
        </View>
        <View
          style={{
            width,
            padding: 16,
            height,
            backgroundColor: "white",
          }}
        >
          <Text>Content</Text>
        </View>
      </Animated.ScrollView>
    </Layout>
  );
};
