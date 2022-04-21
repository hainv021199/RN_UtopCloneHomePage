import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import DeprecatedTextStylePropTypes from "react-native/Libraries/DeprecatedPropTypes/DeprecatedTextStylePropTypes";
const AddPointScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.helloBox}>
        <View style={styles.avataBox}>
          <Image
            style={styles.avata}
            source={require("../../assets/avata.png")}
          ></Image>
        </View>
        <Text style={styles.helloText}>Chào Nguyễn Việt Hải !</Text>
      </View>
      <TouchableOpacity style={styles.option}>
        <View style={styles.content}>
          <Text style={styles.title}>Đổi điểm</Text>
          <Text style={styles.des}>
            Đổi điểm của đối tác liên kết sang điểm Utop
          </Text>
        </View>
        <AntDesign
          style={styles.icon}
          name="addfolder"
          size={50}
          color={"orange"}
        ></AntDesign>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <View style={styles.content}>
          <Text style={styles.title}>Mua điểm</Text>
          <Text style={styles.des}>
            Mua điểm Utop bằng MôM hoặc ATM/VISA/MASTER/JCB hoặc tại Của hàng
            tiện lợi
          </Text>
        </View>
        <FontAwesome
          style={styles.icon}
          name="money"
          size={50}
          color={"orange"}
        ></FontAwesome>
      </TouchableOpacity>
    </View>
  );
};

export default AddPointScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  helloBox: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
  },
  helloText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  avataBox: {
    marginRight: 8,
  },
  avata: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  option: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  content: {
    flex: 1,
    paddingRight: 8,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  icon: {
    borderRadius: 30,
    paddingHorizontal: 8,
  },
});
