import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Footer from "../components/Footer";
const background = require("../assets/headerBackground.jpg");
const State = {
  notExpired: "notExpired",
  expired: "expired",
};
const VoucherScreen = ({ navigation, route }) => {
  let [option, setOption] = React.useState(State.notExpired);
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
      </View>
      <View style={{ width: "100%" }}>
        <Footer navigation={navigation} route={route}></Footer>
      </View>
    </>
  );
};

export default VoucherScreen;

const styles = StyleSheet.create({
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
});
