import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Footer from "../components/Footer";
import Slide from "../components/Slide";
import AntDesign from "react-native-vector-icons/AntDesign";
const ProductInShop = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Slide></Slide>
      </View>
      <View>
        <View style={{ padding: 8 }}>
          <Text style={{ fontWeight: "bold" }}>Kichi Kichi - Bạc Liêu</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="clockcircle" color="orange"></AntDesign>
            <Text style={{ color: "orange", marginLeft: 8 }}>Đang mở cửa</Text>
          </View>
        </View>
        <View style={{ padding: 8 }}>
          <Text>Khóm1, Phường 3, Thị Xã Bạc Liêu, Bạc Liêu</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 8,
            borderRadius: 8,
            margin: 8,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>Deal/Voucher</Text>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 2, paddingRight: 8 }}>
              <Image
                style={styles.image}
                source={require("../assets/food1.jpg")}
              ></Image>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "bold" }}>
                Voucher tiền mặt Kichi-Kichi
              </Text>
              <Text style={{ marginTop: 8, fontSize: 12 }}>
                Nhớ lẩu băng chuyền, cho 'truyền' Kichi
              </Text>
              <Text style={{ fontWeight: "bold", color: "red" }}>100.000đ</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 8,
            borderRadius: 8,
            margin: 8,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>Đánh giá</Text>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              alignItems: "center",
            }}
          ></View>
        </View>
      </View>
    </View>
  );
};

export default ProductInShop;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
});
