import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Footer from "../components/Footer";

const Video = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Video</Text>
      </View>
      <View style={{ width: "100%" }}>
        <Footer navigation={navigation}></Footer>
      </View>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
