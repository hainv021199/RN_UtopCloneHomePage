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
import Home from "./screens/Home";
import ProductInShop from "./screens/ProductInShop";
import History from "./screens/History";
import Voucher from "./screens/Voucher";
import Menu from "./screens/Menu";
import Video from "./screens/Video";
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
          >
            {(props) => {
              return <Home {...props}></Home>;
            }}
          </Stack.Screen>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="History"
            component={History}
          ></Stack.Screen>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Voucher"
            component={Voucher}
          ></Stack.Screen>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Menu"
            component={Menu}
          ></Stack.Screen>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Video"
            component={Video}
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
