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
import ContentList from "../components/ContentList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Options from "../components/Options";
import Slide from "../components/Slide";
import myData from "../data";
import ProductInShop from "../screens/ProductInShop";

const Home = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  console.log("naviation", navigation);
  const onRefresh = () => {
    setRefreshing(true),
      setTimeout(() => {
        setRefreshing(false);
      }, 1500);
  };
  return (
    <>
      <ImageBackground
        imageStyle={styles.image}
        style={styles.imageContainer}
        source={require("../assets/headerBackground.jpg")}
      >
        <StatusBar></StatusBar>
        <View style={{ flex: 1 }}>
          <View style={styles.container}>
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  color="orange"
                ></RefreshControl>
              }
            >
              <Header></Header>
              <Options></Options>
              <Slide></Slide>
              <ContentList
                myData={myData}
                navigation={navigation}
              ></ContentList>
            </ScrollView>
          </View>
          <Footer navigation={navigation}></Footer>
        </View>
      </ImageBackground>
    </>
  );
};

export default Home;

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
    height: 190,
    width: "auto",
    resizeMode: "cover",
  },
});
