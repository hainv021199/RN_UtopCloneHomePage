import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  FlatList,
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
import myData from "../data/data";
import ProductInShop from "../screens/ProductInShop";

const Home = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = () => {
    setRefreshing(true),
      setTimeout(() => {
        setRefreshing(false);
      }, 1500);
  };
  const ListFooterComponent = (
    <>
      <Header></Header>
      <Options></Options>
      <Slide></Slide>
      <ContentList myData={myData} navigation={navigation}></ContentList>
    </>
  );
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
            <FlatList
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              ListFooterComponent={ListFooterComponent}
            ></FlatList>
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
