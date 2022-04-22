import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  PanResponder,
  Animated,
} from "react-native";
import React from "react";
const background = require("../../assets/headerBackground.jpg");
const State = {
  notExpired: "notExpired",
  expired: "expired",
};
let position = 0;
const AddPhoneCardScreen = ({ navigation, route }) => {
  let [option, setOption] = React.useState(State.notExpired);
  const pan = new Animated.ValueXY({
    x: 0,
    y: 0,
  });
  pan.x.addListener((value) => {
    position = value.value;
    if (value.value <= 0) {
    }
  });

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,

    onPanResponderMove: (event, gestureState) => {
      if (position >= 0 && gestureState.dx > 0) {
        pan.x.setValue(0);
      } else if (
        position <= -Dimensions.get("window").width &&
        gestureState.dx < 0
      ) {
        pan.x.setValue(-Dimensions.get("window").width);
      } else {
        pan.x.setValue(gestureState.dx + position);
      }
    },
    onPanResponderRelease: (e, gestureState) => {
      if (position > -Dimensions.get("window").width / 2) {
        Animated.timing(pan.x, {
          toValue: 0,
          useNativeDriver: false,
          duration: 1000,
        }).start();
        setOption(State.notExpired);
      }
      if (position <= -Dimensions.get("window").width / 2) {
        Animated.timing(pan.x, {
          toValue: -Dimensions.get("window").width,
          useNativeDriver: false,
          duration: 1000,
        }).start();
        setOption(State.expired);
      }

      pan.flattenOffset(); // Flatten the offset so it resets the default positioning
    },
  });
  const animateStyle = {
    transform: pan.x <= 0 ? {} : [{ translateX: pan.x }],
  };
  React.useEffect(() => {
    if (
      option === State.expired &&
      position !== -Dimensions.get("window").width
    ) {
      Animated.timing(pan.x, {
        toValue: -Dimensions.get("window").width,
        useNativeDriver: false,
        duration: 1000,
      }).start();
    }
    if (option === State.notExpired && position !== 0) {
      Animated.timing(pan.x, {
        toValue: 0,
        useNativeDriver: false,
        duration: 1000,
      }).start();
    }
  }, [option]);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <TouchableOpacity
            onPress={() => setOption(State.notExpired)}
            style={[
              styles.option,
              option === State.notExpired && styles.selectedBorder,
            ]}
          >
            <Text
              style={
                option === State.notExpired
                  ? styles.selectedText
                  : styles.notSelectedText
              }
            >
              Nạp tiền trực tiếp
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setOption(State.expired)}
            style={[
              styles.option,
              option === State.expired && styles.selectedBorder,
            ]}
          >
            <Text
              style={
                option === State.expired
                  ? styles.selectedText
                  : styles.notSelectedText
              }
            >
              Mua thẻ điện thoại
            </Text>
          </TouchableOpacity>
        </View>

        <Animated.View
          style={[styles.allScreen, animateStyle]}
          {...panResponder.panHandlers}
        >
          <View style={styles.screen}>
            <View>
              <Text>Số điện thoại cần nạp</Text>
              <View style={styles.card}>
                <Text>034 985 3203</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.textBold}>Viettle</Text>

                <Text style={styles.textBold}>Tuỳ chọn giá</Text>

                <View style={styles.prices}>
                  <View style={[styles.price, styles.selectedPrice]}>
                    <Text> 50.000đ</Text>
                  </View>
                  <View style={[styles.price, styles.selectedPrice]}>
                    <Text> 50.000đ</Text>
                  </View>
                  <View style={[styles.price, styles.selectedPrice]}>
                    <Text> 50.000đ</Text>
                  </View>
                  <View style={[styles.price, styles.selectedPrice]}>
                    <Text> 50.000đ</Text>
                  </View>
                  <View style={[styles.price, styles.selectedPrice]}>
                    <Text> 50.000đ</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.footer}>
              <Text style={styles.orangeText}>Tổng tiền: 50 Utop</Text>
              <View style={styles.btn}>
                <Text style={styles.whiteText}>Thanh toán</Text>
              </View>
            </View>
          </View>
          <View style={styles.screen}>
            <View style={styles.content}>
              <Text style={styles.textBold}>Viettle</Text>

              <Text style={styles.textBold}>Tuỳ chọn giá</Text>

              <View style={styles.prices}>
                <View style={[styles.price, styles.selectedPrice]}>
                  <Text> 50.000đ</Text>
                </View>
                <View style={[styles.price, styles.selectedPrice]}>
                  <Text> 50.000đ</Text>
                </View>
                <View style={[styles.price, styles.selectedPrice]}>
                  <Text> 50.000đ</Text>
                </View>
                <View style={[styles.price, styles.selectedPrice]}>
                  <Text> 50.000đ</Text>
                </View>
                <View style={[styles.price, styles.selectedPrice]}>
                  <Text> 50.000đ</Text>
                </View>
              </View>
            </View>
            <View style={styles.footer}>
              <Text style={styles.orangeText}>Tổng tiền: 50 Utop</Text>
              <View style={styles.btn}>
                <Text style={styles.whiteText}>Thanh toán</Text>
              </View>
            </View>
          </View>
        </Animated.View>
      </View>
    </>
  );
};

export default AddPhoneCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  textBold: {
    fontWeight: "bold",
    marginVertical: 8,
  },
  header: {
    flexDirection: "row",
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  headerText: {
    fontWeight: "bold",
    padding: 16,
    fontSize: 18,
  },
  card: {
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    paddingHorizontal: 32,

    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  content: {
    backgroundColor: "white",
    paddingVertical: 4,
    paddingHorizontal: 32,
    borderRadius: 16,
    marginTop: 8,
    paddingBottom: 32,
  },
  option: {
    padding: 8,
  },
  selectedBorder: {
    borderBottomColor: "orange",
    borderBottomWidth: 2,
  },
  selectedText: {
    fontWeight: "bold",
    color: "black",
  },
  notSelectedText: {
    color: "#ccc",
  },

  allScreen: {
    width: Dimensions.get("window").width * 2,
    flex: 1,
    flexDirection: "row",
  },
  screen: {
    flex: 1,
    width: Dimensions.get("window").width,
    marginHorizontal: 8,
    padding: 8,
    marginTop: 16,
  },
  prices: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: -4,
  },
  price: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "orange",
    width: "30%",
    textAlign: "center",
    color: "orange",
    margin: 4,
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    backgroundColor: "white",
    margin: -20,
    alignItems: "center",
  },
  btn: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    padding: 16,
    backgroundColor: "orange",
  },
  whiteText: {
    color: "white",
  },
  orangeText: {
    color: "orange",
  },
});
