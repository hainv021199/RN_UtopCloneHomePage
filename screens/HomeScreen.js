import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import locationData from "../data/location";
import Video from "../components/home/Video";
import MainScreen from "../subScreen/home/MainScreen";
import AddPointScreen from "../subScreen/home/AddPointScreen";
import MembershipScreen from "../subScreen/home/MembershipScreen";
import AddPhoneCardScreen from "../subScreen/home/AddPhoneCardScreen";
let page = 1;
const Home = ({ navigation, route }) => {
  const Stack = createNativeStackNavigator();

  const [location, setLocation] = React.useState("Hà Nội");
  const [showModal, setShowModal] = React.useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "orange",
            alignItems: "center",
            justifyContent: "center",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
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
          name="Giao dịch Utop"
          component={AddPointScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="Nạp thẻ ĐT"
          component={AddPhoneCardScreen}
          options={{
            title: "Nạp thẻ ĐT1",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Thông tin cá nhân"
          component={MembershipScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  stretchAll: {
    flex: 1,
  },
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: "transparent",
    paddingTop: 8,
    paddingHorizontal: 8,
  },
  scrollArea: {
    marginTop: 8,
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },
  image: {
    height: 190,
    width: "auto",
    resizeMode: "cover",
  },
  viewMoreBtn: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 4,
    borderColor: "orange",
    borderWidth: 1,
    borderRadius: 8,
  },
});
