import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Footer from "../components/Footer";
const ProductInShop = ({ navigation }) => {
  return (
    <View style={styles.constainer}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>ProductInShop</Text>
      </View>
      <View style={{ width: "100%" }}>
        <Footer navigation={navigation}></Footer>
      </View>
    </View>
  );
};

export default ProductInShop;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
