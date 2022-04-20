import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  RefreshControl,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import ProductInShop from "./subScreen/home/ProductInShop";
import HistoryScreen from "./screens/HistoryScreen";
import VoucherScreen from "./screens/VoucherScreen";
import MenuScreen from "./screens/MenuScreen";
import VideoScreen from "./screens/VideoScreen";
import myData from "./data/data";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={HomeScreen}
          ></Stack.Screen>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="History"
            component={HistoryScreen}
          ></Stack.Screen>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Voucher"
            component={VoucherScreen}
          ></Stack.Screen>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Menu"
            component={MenuScreen}
          ></Stack.Screen>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Video"
            component={VideoScreen}
          ></Stack.Screen>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="ProductInShop"
            component={ProductInShop}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Home></Home> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 8,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },
  image: {
    height: 220,
    width: "auto",
    resizeMode: "cover",
  },
});
