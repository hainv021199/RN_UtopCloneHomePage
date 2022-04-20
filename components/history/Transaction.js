import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

const Transaction = ({ item, date }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="view-day"
            color={"orange"}
            size={50}
          ></MaterialCommunityIcons>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.time}>
            {date} - {item.time}
          </Text>
          <View style={[styles.row, { paddingRight: 8 }]}>
            <Text style={(styles.status, { color: "green" })}>Hoàn thành</Text>
            <Text>100.000đ</Text>
          </View>
        </View>
        <View style={styles.center}>
          <AntDesign name="right" color={"black"} size={16}></AntDesign>
        </View>
      </View>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 8,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  day: {
    padding: 8,
    fontSize: 24,
  },
  time: {
    color: "#ccc",
    marginVertical: 8,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 8,
    flexDirection: "row",
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 4,
    justifyContent: "space-between",
    padding: 4,
  },
});
