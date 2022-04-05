import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Footer from "../components/Footer";

const Voucher = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Voucher</Text>
      </View>
      <View style={{ width: "100%" }}>
        <Footer navigation={navigation}></Footer>
      </View>
    </View>
  );
};

export default Voucher;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
