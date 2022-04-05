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

const Header = () => {
  const [selectedValue, setSelectedValue] = React.useState("Ha Noi");
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
          <Text>Hà Nội</Text>
          <Entypo name="chevron-down"></Entypo>
        </TouchableOpacity>
        <View style={styles.search}>
          <Icon name="search" size={20}></Icon>
          <TextInput placeholder="Nhập để tìm kiếm ... "></TextInput>
        </View>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.option}>
          <Icon1 name="wallet" size={50}></Icon1>
          <Text>Nạp tiền</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon2 name="mobile-phone" size={50}></Icon2>
          <Text>Nạp thẻ ĐT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon3 name="people" size={50}></Icon3>
          <Text>Membership</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon1 name="qrcode" size={50}></Icon1>
          <Text>Quét QR</Text>
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

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    position: "relative",
    height: 200,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
  },

  location: { flexDirection: "row", alignItems: "center", marginRight: 8 },
  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 4,
    flex: 1,
    marginRight: 50,
  },
  alert: {
    position: "absolute",
    top: 0,
    right: 8,
  },
  options: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  option: {
    justifyContent: "center",
    alignItems: "center",
  },
  points: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    fontWeight: "bold",
  },
});
