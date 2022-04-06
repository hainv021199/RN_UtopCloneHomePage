import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
let x = 0;
const ContentItem = ({ myData, navigation }) => {
  x++;
  const renderStar = (num) => {
    let count = num;
    let arr = [];
    for (let i = 0; i < 5; i++) {
      if (i + 1 <= num) {
        arr.push(
          <AntDesign key={i + x} name="star" color="orange"></AntDesign>
        );
      } else {
        arr.push(
          <AntDesign key={i + x} name="staro" color="orange"></AntDesign>
        );
      }
    }
    return arr;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("ProductInShop");
      }}
    >
      <View style={styles.heading}>
        <View style={styles.logo}>
          <Image style={styles.logo} source={myData.logo}></Image>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{myData.title}</Text>
          <View style={{ flexDirection: "row" }}>
            {renderStar(myData.star)}
          </View>
          <View style={styles.des}>
            <Entypo
              style={{ marginRight: 4 }}
              name="list"
              color="orange"
              size={20}
            ></Entypo>
            <Text>{myData.des}</Text>
          </View>
        </View>
      </View>
      {/*  */}
      <View style={styles.content}>
        <View style={styles.contentLeft}>
          <Image style={styles.imageLarge} source={myData.images[0]}></Image>
        </View>
        <View style={styles.contentRight}>
          <View style={{ flex: 1 }}>
            <Image style={styles.imageSmall} source={myData.images[1]}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Image style={styles.imageSmall} source={myData.images[2]}></Image>
          </View>
        </View>
      </View>
      <View style={styles.toShop}>
        <Entypo
          style={{ marginRight: 8 }}
          name="shop"
          color="orange"
          size={20}
        ></Entypo>
        <Text style={{ marginRight: 8 }}>Xem tất cả cửa hàng </Text>
        <Entypo name="chevron-right" color="black" size={20}></Entypo>
      </View>
    </TouchableOpacity>
  );
};

export default ContentItem;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginTop: 16,
    backgroundColor: "white",
    borderRadius: 8,
    //
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    borderRadius: 60 / 2,
    height: 60,
    width: 60,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4,
  },
  des: {
    flexDirection: "row",
    alignContent: "center",
    marginTop: 4,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
  contentLeft: {
    paddingRight: 8,
    flex: 2,
  },
  contentRight: {
    flex: 1,
    justifyContent: "space-between",
  },
  imageLarge: {
    borderRadius: 8,
    height: 100,
    width: "100%",
  },
  imageSmall: {
    height: 46,
    width: "100%",
    borderRadius: 8,
  },
  toShop: {
    flexDirection: "row",
    alignItems: "center",
    margin: 8,
  },
});
