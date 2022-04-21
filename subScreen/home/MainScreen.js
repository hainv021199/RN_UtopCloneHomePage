import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/home/Header";
import Options from "../../components/home/Options";
import Slide from "../../components/home/Slide";
import fakeData from "../../data/data";
import ProductInShop from "../../subScreen/home/ProductInShop";
import { useEffect } from "react";
import ContentItem from "../../components/home/ContentItem";
import Functions from "../../components/home/Functions";
import UtopPoint from "../../components/home/UtopPoint";
import SelectLocationModal from "../../components/home/SelectLocationModal";
import locationData from "../../data/location";
import Video from "../../components/home/Video";
let page = 1;
const MainScreen = ({ navigation, route, navigationBefore, routeBefore }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [toggleHeader, setToggleHeader] = React.useState(false);

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [location, setLocation] = React.useState("Hà Nội");
  const [showModal, setShowModal] = React.useState(false);

  const handleSetLocation = (index) => {
    setLocation(locationData[index]);
    handleCloseModal();
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const onRefresh = () => {
    setRefreshing(true),
      setTimeout(() => {
        setRefreshing(false);
      }, 1500);
  };

  const ListFooterComponent = (
    <>
      {loading && (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
        >
          <ActivityIndicator
            animating={loading}
            size="large"
            color="orange"
          ></ActivityIndicator>
        </View>
      )}
    </>
  );

  const ListHeaderComponent = (
    <>
      <Functions navigation={navigation}></Functions>
      <UtopPoint></UtopPoint>
      <Options></Options>
      <Slide></Slide>
      <Video></Video>
    </>
  );

  const renderItem = ({ item }) => (
    <ContentItem
      key={item.id}
      myData={item}
      navigation={navigation}
      page={page}
    />
  );

  const getData = () => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=5`)
      .then((response) => response.json())
      .then((resData) => {
        setData([
          ...data,
          ...resData.map((item, i) => {
            return {
              ...item,
              title: fakeData[i].title + " " + page,
              numOfStar: Math.floor(Math.random() * 5),
            };
          }),
        ]);

        ++page;
        setLoading(false);
      });
  };
  const viewMore = () => {
    if (!loading) {
      getData();
      setLoading(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  return (
    <>
      <ImageBackground
        imageStyle={styles.image}
        style={styles.imageContainer}
        source={require("../../assets/headerBackground.jpg")}
      >
        <StatusBar></StatusBar>
        <View style={styles.stretchAll}>
          <View style={styles.container}>
            <Header
              style={styles.header}
              setShowModal={setShowModal}
              location={location}
            ></Header>

            <View style={styles.scrollArea}>
              <FlatList
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
                initialNumToRender={5}
                data={data}
                onEndReached={({ distanceFromEnd }) => {
                  if (distanceFromEnd >= 0) {
                    viewMore();
                  }
                }}
                extraData={(item) => item.id.toString()}
                onEndReachedThreshold={0.5}
                ListHeaderComponent={ListHeaderComponent}
                ListFooterComponent={ListFooterComponent}
                renderItem={renderItem}
                style={styles.stretchAll}
              ></FlatList>
            </View>
          </View>
          <Footer navigation={navigationBefore} route={routeBefore}></Footer>
        </View>
        {showModal && (
          <SelectLocationModal
            location={location}
            onClose={handleCloseModal}
            setLocation={handleSetLocation}
          ></SelectLocationModal>
        )}
      </ImageBackground>
    </>
  );
};

export default MainScreen;

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
