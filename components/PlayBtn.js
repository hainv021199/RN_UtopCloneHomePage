import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";

const PlayBtn = ({ navigation }) => {
  let [scaleValue, setScaleValue] = React.useState(new Animated.Value(0));
  console.log("scaleValue", typeof scaleValue);

  let positionY = scaleValue.interpolate({
    inputRange: [0, 0.2, 0.25, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9, 0.99],
    outputRange: [0, 5, -5, -60, -80, -40, -20, -22, -19, -18],
  });
  let positionX = scaleValue.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 1, 1, 1, 1],
    outputRange: [0, -5, 30, 15, 12, 11, 10, 10],
  });
  let container1Scale = scaleValue.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
    outputRange: [1, 1.2, 1.4, 1.2, 1.4, 1.1],
  });
  let playStyle = {
    transform: [
      { scale: scaleValue },
      { translateY: positionY },
      { translateX: positionX },
    ],
  };
  let container1 = {
    transform: [{ scale: container1Scale }],
  };
  React.useEffect(() => {
    console.log("call useEffect");
    Animated.loop(
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 4000,

        useNativeDriver: true,
      })
    ).start();
  }, []);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Video")}
      style={styles.footerOption}
    >
      <View style={styles.container2}>
        <Animated.View style={[styles.play, , playStyle]}>
          <Entypo name="controller-play" size={30} color="white" />
        </Animated.View>
      </View>
      <Animated.View style={[styles.container1, container1]}></Animated.View>
    </TouchableOpacity>
  );
};

export default PlayBtn;

const styles = StyleSheet.create({
  footerOption: {
    position: "relative",
    // backgroundColor: "blue",
  },
  container1: {
    position: "absolute",
    zIndex: -2,
    backgroundColor: "rgba(255, 213, 128, 0.3)",
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    transform: [],
  },
  container2: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "orange",
    position: "relative",
    top: 0,
    left: 0,
    // justifyContent: "center",
    // alignItems: "center",
  },
  play: {
    position: "absolute",
    top: 20,
    left: -5,
  },
});
