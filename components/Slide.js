import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
const images = [
  require("../assets/banner2.jpg"),
  require("../assets/banner3.jpg"),
  require("../assets/banner4.jpg"),
  require("../assets/banner5.png"),
];
const Slide = () => {
  return (
    <View style={styles.container}>
      <SliderBox
        parentWidth={396}
        autoplay
        autoplayDelay={800}
        circleLoop
        images={images}
        dotColor="#FFEE58"
        inactiveDotColor="white"
      />
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
});
