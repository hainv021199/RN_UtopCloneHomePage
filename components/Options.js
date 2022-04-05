import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Options = () => {
  return (
    <View style={styles.options}>
      <ScrollView horizontal={true} bounces={false}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.option}>
              <View style={styles.optionIcon}>
                <AntDesign
                  name="notification"
                  size={40}
                  color="purple"
                ></AntDesign>
              </View>
              <Text style={styles.textUnder}>Khuyến mãi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <View style={styles.optionIcon}>
                <AntDesign name="book" size={40} color="green"></AntDesign>
              </View>
              <Text style={styles.textUnder}>Học hành</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <View style={styles.optionIcon}>
                <AntDesign
                  name="shoppingcart"
                  size={40}
                  color="gray"
                ></AntDesign>
              </View>
              <Text style={styles.textUnder}>Đi chợ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <View style={styles.optionIcon}>
                <FontAwesome5
                  name="piggy-bank"
                  size={40}
                  color="orange"
                ></FontAwesome5>
              </View>
              <Text style={styles.textUnder}>UtopBack</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <View style={styles.optionIcon}>
                <FontAwesome5 name="spa" size={40} color="blue"></FontAwesome5>
              </View>
              <Text style={styles.textUnder}>Spa</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.option}>
              <View style={styles.optionIcon}>
                <FontAwesome5
                  name="shipping-fast"
                  size={40}
                  color="red"
                ></FontAwesome5>
              </View>
              <Text style={styles.textUnder}>Giao đi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <View style={styles.optionIcon}>
                <FontAwesome
                  name="shopping-bag"
                  size={40}
                  color="yellow"
                ></FontAwesome>
              </View>
              <Text style={styles.textUnder}>Mua</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <View style={styles.optionIcon}>
                <Ionicons name="fast-food" size={40} color="red"></Ionicons>
              </View>
              <Text style={styles.textUnder}>Ăn uống</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <View style={styles.optionIcon}>
                <MaterialCommunityIcons
                  name="pot-steam-outline"
                  size={40}
                  color="orange"
                ></MaterialCommunityIcons>
              </View>
              <Text style={styles.textUnder}>Món lẩu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  options: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 8,
    //
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginTop: -18,
  },
  option: {
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    width: 90,
  },
  optionIcon: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textUnder: {
    textAlign: "center",
    fontSize: 12,
  },
});
