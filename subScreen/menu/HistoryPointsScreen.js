import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
const Card = ({ index }) => {
  return (
    <View style={styles.card}>
      <View style={styles.icon}>
        {index % 5 ? (
          <FontAwesome5 name="store-alt" size={24} color="blue"></FontAwesome5>
        ) : (
          <FontAwesome name="money" size={24} color="orange"></FontAwesome>
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          {index % 5 ? "Thanh toán Utop tại quầy" : "Nạp Utop từ MôM"}
        </Text>
        <Text style={styles.point}>-30 Utop</Text>
        <View style={styles.row}>
          <Text style={styles.date}>21/04/2022</Text>
          <Text style={[styles.spaceLeft, styles.date]}>11:29</Text>
        </View>
      </View>
      <AntDesign name="right" size={16}></AntDesign>
    </View>
  );
};
let fakeData = new Array(10).fill(1);

const HistoryPointsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        {fakeData.map((data, i) => {
          return <Card key={i} index={i}></Card>;
        })}
      </View>
    </ScrollView>
  );
};

export default HistoryPointsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  row: {
    flexDirection: "row",
  },
  card: {
    backgroundColor: "white",
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  content: {
    flex: 4,
  },
  title: {
    fontWeight: "bold",
  },
  date: {
    color: "#ccc",
  },
});
