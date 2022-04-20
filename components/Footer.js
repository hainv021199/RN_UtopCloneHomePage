import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon1 from "react-native-vector-icons/AntDesign";
import FoundationIcon from "react-native-vector-icons/Foundation";
import Octicons from "react-native-vector-icons/Octicons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
const Screen = {
  home: "home",
  history: "history",
};
const Footer = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.footerOption}
        onPress={() => navigation.navigate("Home")}
      >
        <AntDesign
          name="home"
          size={32}
          color={route.name === "Home" && "orange"}
        ></AntDesign>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("History")}
        style={styles.footerOption}
      >
        <Octicons
          name="history"
          size={32}
          color={route.name === "History" && "orange"}
        ></Octicons>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Video")}
        style={styles.footerOption}
      >
        <Icon1 name="play" style={styles.play} size={40} color="orange" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Voucher")}
        style={styles.footerOption}
      >
        <FoundationIcon
          name="page"
          size={32}
          color={route.name === "Voucher" && "orange"}
        ></FoundationIcon>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Menu")}
        style={styles.footerOption}
      >
        <Entypo
          name="list"
          size={32}
          color={route.name === "Menu" && "orange"}
        ></Entypo>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    shadowColor: "yellow",
    shadowOffset: {
      width: 0,
      height: -80,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 15,
  },

  logo: {
    flex: 1,
    width: 220,
    height: "auto",
    resizeMode: "cover",
  },
  footerOption: {},
});
