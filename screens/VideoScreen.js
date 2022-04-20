import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Footer from "../components/Footer";

const VideoScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>VideoScreen</Text>
      </View>
      <View style={{ width: "100%" }}>
        <Footer navigation={navigation} route={route}></Footer>
      </View>
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
