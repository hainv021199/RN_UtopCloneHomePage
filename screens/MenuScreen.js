import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PersonalInfoScreen from "../subScreen/menu/PersonalInfoScreen";
import MainScreen from "../subScreen/menu/MainScreen";
import HistoryPointsScreen from "../subScreen/menu/HistoryPointsScreen";
const Stack = createNativeStackNavigator();

const MenuScreen = ({ navigation, route }) => {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "orange",
          justifyContent: "center",
        },
      }}
    >
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
      <Stack.Screen
        name="PersonalInfo"
        options={{
          title: "Thông tin cá nhân",
        }}
      >
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
      <Stack.Screen
        name="HistoryPointsScreen"
        options={{
          title: "Lịch sử điểm Utop",
        }}
        component={HistoryPointsScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
export default MenuScreen;

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
