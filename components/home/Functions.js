import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon1 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
const Functions = ({ navigation }) => {
  return (
    <View style={styles.options}>
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.push("Giao dịch Utop")}
      >
        <Icon1 name="wallet" size={40}></Icon1>
        <Text style={styles.textOption}>Nạp tiền</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.push("Nạp thẻ ĐT")}
      >
        <Icon2 name="mobile-phone" size={40}></Icon2>
        <Text style={styles.textOption}>Nạp thẻ ĐT</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.push("Thông tin cá nhân")}
      >
        <Icon3 name="people" size={40}></Icon3>
        <Text style={styles.textOption}>Membership</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Icon1 name="qrcode" size={40}></Icon1>
        <Text style={styles.textOption}>Quét QR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Functions;

const styles = StyleSheet.create({
  options: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  option: {
    justifyContent: "center",
    alignItems: "center",
  },
  textOption: {
    display: "flex",
  },
});
