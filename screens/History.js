import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Footer from "../components/Footer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Option from "../components/history/Option";
import CardList from "../components/history/CardList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderScreen from "../subScreen/history/OrderScreen";
const background = require("../assets/headerBackground.jpg");
const Choose = {
  All: "All",
  Voucher: "Voucher",
  Store: "Store",
};

const History = ({ navigation, route }) => {
  const Stack = createNativeStackNavigator();
  let [selected, setSelected] = React.useState(Choose.All);
  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.header}>
          <Text style={styles.headerText}>Lịch sử giao dịch</Text>
        </ImageBackground>

        <View style={styles.options}>
          <TouchableOpacity style={[styles.choseDay, styles.roundBorder]}>
            <MaterialCommunityIcons
              name="calendar-today"
              size={24}
            ></MaterialCommunityIcons>
            <Text style={{ marginLeft: 8 }}>-- Chon ngày --</Text>
          </TouchableOpacity>

          <View style={styles.optionList}>
            <Option
              setSelected={setSelected}
              text={Choose.All}
              chosed={selected === Choose.All}
            ></Option>
            <Option
              setSelected={setSelected}
              text={Choose.Voucher}
              chosed={selected === Choose.Voucher}
            ></Option>
            <Option
              setSelected={setSelected}
              text={Choose.Store}
              chosed={selected === Choose.Store}
            ></Option>
          </View>
        </View>

        <View style={styles.content}>
          <CardList></CardList>
        </View>
      </View>
      
      <View style={{ width: "100%" }}>
        <Footer navigation={navigation} route={route}></Footer>
      </View>
    </>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  options: {
    justifyContent: "space-around",
    backgroundColor: "white",
    padding: 8,
    paddingVertical: 16,
  },
  optionList: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  header: {
    flexDirection: "row",
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  choseDay: {
    width: "100%",
    padding: 8,
  },
  roundBorder: {
    flexDirection: "row",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  headerText: {
    fontWeight: "bold",
    padding: 16,
    fontSize: 18,
  },
  content: {
    flex: 1,
  },
});
