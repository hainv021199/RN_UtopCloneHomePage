import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { borderBottomColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
const PersonalInfoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.avata}>
          <Image
            style={styles.avataImage}
            source={require("../../assets/avata.png")}
          ></Image>
          <TouchableOpacity style={styles.editAvata}>
            <Entypo name="pencil" color="orange" size={18}></Entypo>
          </TouchableOpacity>
        </View>
        <View style={styles.inputsContainer}>
          <View style={styles.inputField}>
            <Text style={styles.label}>Họ và tên </Text>
            <TextInput placeholder="Họ và tên"></TextInput>
          </View>
          <View style={styles.inputField}>
            <Text style={styles.label}>Số điện thoại </Text>
            <TextInput placeholder="Số điện thoại"></TextInput>
          </View>
          <View style={styles.inputField}>
            <Text style={styles.label}>Email </Text>
            <TextInput placeholder="Nhập email"></TextInput>
          </View>
          <View style={[styles.inputField, styles.row]}>
            <Text style={[styles.bold, { paddingVertical: 16 }]}>
              Quản lý thẻ/Tài khoản
            </Text>
            <AntDesign name="right"></AntDesign>
          </View>
        </View>
      </View>
      <Text style={styles.textFoot}>Phương thức đăng nhập</Text>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.bold}>Kết nối Facebook</Text>
          <View style={styles.connectBtn}>
            <View style={styles.backgroundPart}></View>
            <View style={styles.roundPart}></View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.orangeBorder}>
        <Text style={{ color: "orange" }}>Lưu thông tin</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PersonalInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
  },
  avata: {
    alignItems: "center",
  },
  avataImage: {
    height: 160,
    width: 160,
    borderRadius: 100,
  },
  inputField: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  label: {
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bold: {
    fontWeight: "bold",
  },
  editAvata: {
    backgroundColor: "white",
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 110,
    left: 180,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  textFoot: {
    marginVertical: 20,
  },
  orangeBorder: {
    borderColor: "orange",
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
    marginTop: 16,
  },
  connectBtn: {
    position: "relative",
  },
  backgroundPart: {
    backgroundColor: "#ffbf00",
    width: 40,
    height: 16,
    borderRadius: 8,
  },
  roundPart: {
    width: 24,
    height: 24,
    backgroundColor: "orange",
    borderRadius: 12,
    position: "absolute",
    transform: [
      {
        translateY: -4,
      },
    ],
  },
});
