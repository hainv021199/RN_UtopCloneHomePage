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
      height: 180,
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
    options: {
      flexDirection: "row",
      flex: 1,
      marginRight: toggleHeader ? 80 : 0,
      justifyContent: "space-between",
    },
    option: {
      justifyContent: "center",
      alignItems: toggleHeader ? "flex-start" : "center",
    },
    textOption: {
      display: toggleHeader ? "none" : "flex",
    },
    points: {
      display: toggleHeader ? "none" : "flex",
      backgroundColor: "white",
      padding: 8,
      borderRadius: 8,
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 2,
      fontWeight: "bold",
    },
  });
  const [selectedValue, setSelectedValue] = React.useState("Ha Noi");
  const iconSize = toggleHeader ? 25 : 50;
  return (
    <View style={styles.container}>
      <View style={styles.alert}>
        <View style={{ position: "relative" }}>
          <Icon name="notifications" size={30}></Icon>
          <View
            style={{
              position: "absolute",
              top: 9,
              right: -2,
              backgroundColor: "red",
              height: 18,
              width: 18,
              borderRadius: 20 / 2,
            }}
          >
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
      <View style={styles.options}>
        <TouchableOpacity style={styles.option}>
          <Icon1 name="wallet" size={iconSize}></Icon1>
          <Text style={styles.textOption}>Nạp tiền</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon2 name="mobile-phone" size={iconSize}></Icon2>
          <Text style={styles.textOption}>Nạp thẻ ĐT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon3 name="people" size={iconSize}></Icon3>
          <Text style={styles.textOption}>Membership</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon1 name="qrcode" size={iconSize}></Icon1>
          <Text style={styles.textOption}>Quét QR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.points}>
        <Text style={{ fontWeight: "bold" }}>Điểm Utop của bạn</Text>
        <Text style={{ color: "red", fontWeight: "bold" }}>150</Text>
      </View>
    </View>
  );
};

export default Header;
