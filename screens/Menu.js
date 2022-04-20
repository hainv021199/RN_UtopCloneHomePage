import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Footer from "../components/Footer";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PersonalInfoScreen from "../subScreen/menu/PersonalInfoScreen";

const background = require("../assets/headerBackground.jpg");
const Stack = createNativeStackNavigator();
const MainScreen = ({ navigationBefore, routeBefore, navigation, route }) => {
  return (
    <>
      <ScrollView style={styles.container}>
        <ImageBackground source={background} style={styles.header}>
          <Text style={styles.headerText}>Menu</Text>
        </ImageBackground>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>Cá nhân</Text>
            <TouchableOpacity
              style={styles.nav}
              onPress={() => navigation.push("PersonalInfo")}
            >
              <Text>Thông tin cá nhân</Text>
              <AntDesign name="right"></AntDesign>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav}>
              <Text>Lịch sử điểm Utop</Text>
              <AntDesign name="right"></AntDesign>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav}>
              <Text>Giới thiệu bạn bè</Text>
              <AntDesign name="right"></AntDesign>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 8 }}>
            <Text style={styles.title}>Thông tin</Text>
            <TouchableOpacity style={styles.nav}>
              <View style={styles.row}>
                <AntDesign
                  name="questioncircle"
                  color="blue"
                  size={20}
                ></AntDesign>
                <Text style={styles.leftSpace}>Câu hỏi thường gặp</Text>
              </View>
              <AntDesign name="right"></AntDesign>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav}>
              <View style={styles.row}>
                <AntDesign
                  name="filetext1"
                  color="yellow"
                  size={20}
                ></AntDesign>
                <Text style={styles.leftSpace}>Điều khoản sử dụng</Text>
              </View>
              <AntDesign name="right"></AntDesign>
            </TouchableOpacity>
            <View style={styles.nav}>
              <View style={styles.row}>
                <MaterialIcons
                  name="policy"
                  color="green"
                  size={20}
                ></MaterialIcons>
                <Text style={styles.leftSpace}>Chính sách bảo mật</Text>
              </View>
              <AntDesign name="right"></AntDesign>
            </View>
            <TouchableOpacity style={styles.nav}>
              <View style={styles.row}>
                <AntDesign
                  name="filetext1"
                  color="purple"
                  size={20}
                ></AntDesign>
                <Text style={styles.leftSpace}>Quy chế hoạt động</Text>
              </View>

              <AntDesign name="right"></AntDesign>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav}>
              <View style={styles.row}>
                <MaterialIcons
                  name="support-agent"
                  color="lightblue"
                  size={20}
                ></MaterialIcons>
                <Text style={styles.leftSpace}>Hỗ trợ</Text>
              </View>

              <AntDesign name="right"></AntDesign>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav}>
              <View style={styles.row}>
                <MaterialIcons
                  name="logout"
                  color="orange"
                  size={20}
                ></MaterialIcons>
                <Text style={styles.leftSpace}>Đăng xuất</Text>
              </View>

              <AntDesign name="right"></AntDesign>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={{ width: "100%" }}>
        <Footer navigation={navigationBefore} route={routeBefore}></Footer>
      </View>
    </>
  );
};
const Menu = ({ navigation, route }) => {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="MainScreen"
      >
        {(props) => {
          return (
            <MainScreen
              {...props}
              navigationBefore={navigation}
              routeBefore={route}
            ></MainScreen>
          );
        }}
      </Stack.Screen>
      <Stack.Screen name="PersonalInfo">
        {(props) => {
          return (
            <PersonalInfoScreen
              {...props}
              navigationBefore={navigation}
              routeBefore={route}
            ></PersonalInfoScreen>
          );
        }}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftSpace: {
    marginLeft: 8,
  },
  header: {
    flexDirection: "row",
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  headerText: {
    fontWeight: "bold",
    padding: 16,
    fontSize: 18,
  },
  title: {
    fontWeight: "bold",
    marginTop: 16,
  },
  content: {
    paddingHorizontal: 8,
  },
  nav: {
    flexDirection: "row",
    borderRadius: 8,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginTop: 8,
  },
});
