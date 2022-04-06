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
import ContentList from "../components/ContentList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Options from "../components/Options";
import Slide from "../components/Slide";
import myData from "../data/data";
import ProductInShop from "../screens/ProductInShop";
import { useEffect } from "react";
import ContentItem from "../components/ContentItem";
import Functions from "../components/Functions";
import UtopPoint from "../components/UtopPoint";

const Home = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [toggleHeader, setToggleHeader] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true),
      setTimeout(() => {
        setRefreshing(false);
      }, 1500);
  };

  const ListFooterComponent = (
    <>
      {loading ? (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#ddd" }}>Loading {page}</Text>
          <ActivityIndicator
            animating={loading}
            size="large"
            color="orange"
          ></ActivityIndicator>
        </View>
      ) : (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            style={styles.viewMoreBtn}
            onPress={() => {
              console.log("button");
              viewMore();
            }}
          >
            <Text style={{ color: "orange", fontSize: 16 }}>View More</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );

  const ListHeaderComponent = (
    <>
      <Functions></Functions>
      <UtopPoint></UtopPoint>
      <Options></Options>
      <Slide></Slide>
    </>
  );

  const onScroll = (e) => {
    if (e.nativeEvent.contentOffset.y > 0) {
      setToggleHeader(true);
    } else {
      setToggleHeader(false);
    }
  };
  const renderItem = ({ item }) => (
    <ContentItem myData={item} navigation={navigation} />
  );
  const getData = () => {
    setLoading(true);
    fetch(`https://randomuser.me/api/?page=${page}&results=5`)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setData([
          ...data,
          ...resData.results.map((d, i) => {
            return {
              ...myData[i],
              id: d.email,
              title: myData[i].title + " " + page,
            };
          }),
        ]);
        setLoading(false);
      });
  };
  const viewMore = () => {
    setPage(page + 1);
    getData();
    console.log("load view more");
  };

  useEffect(() => {
    getData(myData);
  }, []);

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
            <Header style={styles.header} toggleHeader={toggleHeader}></Header>
            <View style={styles.scrollArea}>
              <FlatList
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
                data={data}
                onEndReached={viewMore}
                extraData={(item, i) => String(item.id)}
                onEndReachedThreshold={0}
                ListHeaderComponent={ListHeaderComponent}
                ListFooterComponent={ListFooterComponent}
                renderItem={renderItem}
              ></FlatList>
            </View>
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
    marginTop: 30,

    flex: 1,
    backgroundColor: "transparent",
    padding: 8,
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
