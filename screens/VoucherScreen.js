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
import Footer from "../components/Footer";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

const background = require("../assets/headerBackground.jpg");
const State = {
  notExpired: "notExpired",
  expired: "expired",
};
let position = 0;
const VoucherScreen = ({ navigation, route }) => {
  let [option, setOption] = React.useState(State.notExpired);
  const pan = new Animated.ValueXY({
    x: 0,
    y: 0,
  });
  pan.x.addListener((value) => {
    position = value.value;
    if (value.value <= 0) {
      // pan.x.setValue(0);
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
      pan.flattenOffset();
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
        <ImageBackground source={background} style={styles.header}>
          <Text style={styles.headerText}>Voucher của tôi</Text>
        </ImageBackground>
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
              Còn hiệu lực
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
              Hết hiệu lực
            </Text>
          </TouchableOpacity>
        </View>
        <Animated.View
          style={[styles.content, animateStyle]}
          {...panResponder.panHandlers}
        >
          <View style={styles.screen}>
            <View style={styles.cardItem}>
              <View style={styles.icon}>
                <FontAwesome
                  name="money"
                  size={24}
                  color="orange"
                ></FontAwesome>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.title}>Thanh toán tại quầy </Text>
                <Text style={styles.point}>-30 Utop</Text>
                <View style={styles.row}>
                  <Text style={styles.date}>21/04/2022</Text>
                  <Text style={[styles.spaceLeft, styles.date]}>11:29</Text>
                </View>
              </View>
              <View>
                <AntDesign name="right" size={16}></AntDesign>
              </View>
            </View>
          </View>
          <View style={styles.screen}>
            <View style={styles.cardItem}>
              <View style={styles.icon}>
                <FontAwesome5
                  name="store-alt"
                  size={24}
                  color="blue"
                ></FontAwesome5>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.title}>Nạp Utop từ MoMo</Text>
                <Text style={styles.point}>-30 Utop</Text>
                <View style={styles.row}>
                  <Text style={styles.date}>21/04/2022</Text>
                  <Text style={[styles.spaceLeft, styles.date]}>11:29</Text>
                </View>
              </View>
              <AntDesign name="right" size={16}></AntDesign>
            </View>
          </View>
        </Animated.View>
      </View>
      <View style={styles.fullWidth}>
        <Footer navigation={navigation} route={route}></Footer>
      </View>
    </>
  );
};

export default VoucherScreen;

const styles = StyleSheet.create({
  fullWidth: {
    width: "100%",
  },
  container: {
    flex: 1,
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
    padding: 32,
    fontSize: 18,
  },
  card: {
    backgroundColor: "white",
    padding: 8,
    paddingHorizontal: 32,
    marginHorizontal: 16,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    transform: [
      {
        translateY: -16,
      },
    ],
  },
  option: {
    padding: 16,
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

  content: {
    width: Dimensions.get("window").width * 2,
    flex: 1,
    flexDirection: "row",
  },
  screen: {
    flex: 1,
    width: Dimensions.get("window").width,
    marginHorizontal: 8,
  },
  cardItem: {
    backgroundColor: "white",
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignContent: "center",
    marginTop: 16,
    alignItems: "center",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  contentItem: {
    flex: 4,
  },
  title: {
    fontWeight: "bold",
  },
  date: {
    color: "#ccc",
  },
  row: {
    flexDirection: "row",
  },
  spaceLeft: {
    marginLeft: 8,
  },
});
