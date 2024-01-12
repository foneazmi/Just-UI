import { Text } from "react-native";
import { Layout } from "~/ui/components";

export const ShoppingStoreBlankPage = () => {
  return (
    <Layout
      style={{
        backgroundColor: "white",
        paddingHorizontal: 16,
      }}
    >
      <Text>-</Text>
    </Layout>
  );
};
