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
import fakeData from "../data/data";
import ProductInShop from "../screens/ProductInShop";
import { useEffect } from "react";
import ContentItem from "../components/ContentItem";
import Functions from "../components/Functions";
import UtopPoint from "../components/UtopPoint";
let page = 1;
const Home = ({ navigation, route }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [toggleHeader, setToggleHeader] = React.useState(false);

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
  // const isCloseToBottom = ({
  //   layoutMeasurement,
  //   contentOffset,
  //   contentSize,
  // }) => {
  //   return (
  //     layoutMeasurement.height + contentOffset.y >= contentSize.height - 100
  //   );
  // };
  // let scrollToEndNotified = false;
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
                initialNumToRender={5}
                data={data}
                onEndReached={({ distanceFromEnd }) => {
                  if (distanceFromEnd >= 0) {
                    viewMore();
                  }
                }}
                // onScroll={({ nativeEvent }) => {
                //   //console.log(nativeEvent);
                //   if (!scrollToEndNotified && isCloseToBottom(nativeEvent)) {
                //     scrollToEndNotified = true;
                //     viewMore();
                //   }
                // }}
                extraData={(item) => item.id.toString()}
                onEndReachedThreshold={0.5}
                ListHeaderComponent={ListHeaderComponent}
                ListFooterComponent={ListFooterComponent}
                renderItem={renderItem}
              ></FlatList>
            </View>
          </View>
          <Footer navigation={navigation} route={route}></Footer>
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
