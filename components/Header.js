import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon1 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const Header = ({ toggleHeader }) => {
  const styles = StyleSheet.create({
    container: {
      position: "relative",
      zIndex: 10,
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: toggleHeader ? "orange" : "transparent",
      flexDirection: toggleHeader ? "row" : "column",
    },
    heading: {
      flexDirection: "row",
      alignItems: "center",
    },

    location: { flexDirection: "row", marginRight: 8, alignItems: "center" },
    search: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: toggleHeader ? "transparent" : "white",
      borderRadius: 8,
      paddingHorizontal: 4,
      alignItems: toggleHeader ? "flex-start" : "center",
      marginRight: 80,
      flex: 1,
    },
    textInput: {
      display: toggleHeader ? "none" : "flex",
    },
    alert: {
      position: "absolute",
      top: 0,
      right: 8,
    },

    notification: {
      position: "absolute",
      top: 9,
      right: -2,
      backgroundColor: "red",
      height: 18,
      width: 18,
      borderRadius: 20 / 2,
    },
  });
  const [selectedValue, setSelectedValue] = React.useState("Ha Noi");
  const iconSize = toggleHeader ? 25 : 50;
  return (
    <View style={styles.container}>
      <View style={styles.alert}>
        <View style={{ position: "relative" }}>
          <Icon name="notifications" size={30}></Icon>
          <View style={styles.notification}>
            <Text style={{ textAlign: "center", color: "white", fontSize: 12 }}>
              2
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.heading}>
        <TouchableOpacity style={styles.location}>
          <EvilIcons name="location" size={25} />
          <Text style={styles.textOption}>Hà Nội</Text>
          <Entypo name="chevron-down"></Entypo>
        </TouchableOpacity>
        <View style={styles.search}>
          <Icon name="search" size={20}></Icon>
          <TextInput
            style={styles.textInput}
            placeholder="Nhập để tìm kiếm ... "
          ></TextInput>
        </View>
      </View>
    </View>
  );
};

export default Header;
