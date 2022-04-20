import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import React from "react";
import Icon1 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import myData from "../../data";
import SelectLocationModal from "./SelectLocationModal";
const Header = ({ location, setShowModal }) => {
  const toggleLocationSelect = () => {
    setShowModal(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <TouchableOpacity
          style={styles.location}
          onPress={toggleLocationSelect}
        >
          <EvilIcons name="location" size={25} />
          <Text style={styles.textOption}>{location}</Text>
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
      <View style={styles.alert}>
        <View style={styles.relativePosition}>
          <Icon name="notifications" size={30}></Icon>
          <View style={styles.notification}>
            <Text style={styles.notificationText}>2</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  relativePosition: {
    position: "relative",
  },
  notificationText: {
    textAlign: "center",
    color: "white",
    fontSize: 12,
  },
  container: {
    position: "relative",
    zIndex: 10,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
  },

  location: { flexDirection: "row", marginRight: 8, alignItems: "center" },
  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 4,
    alignItems: "center",
    marginRight: 80,
    flex: 1,
  },
  textInput: {},
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
