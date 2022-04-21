import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
const src = require("../../assets/videoImages.jpg");
const Video = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Khám phá</Text>
      <Image source={src} style={styles.image}></Image>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
  image: {
    width: "100%",
    height: 200,
  },
  container: {
    padding: 8,
    backgroundColor: "white",
    marginVertical: 8,
  },
});
