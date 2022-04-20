import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Transaction from "./Transaction";

const HistoryCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.date}</Text>
      {item.transactions.map((tran, i) => {
        return (
          <Transaction key={tran.id} item={tran} date={item.date}></Transaction>
        );
      })}
    </View>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  title: {
    fontWeight: "bold",
    paddingVertical: 16,
  },
});
