import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import HistoryCard from "./HistoryCard";
import historyData from "../../data/history";
const CardList = () => {
  return (
    <>
      <ScrollView>
        {historyData.map((data, i) => {
          return <HistoryCard key={data.id} item={data}></HistoryCard>;
        })}
        <Text style={styles.footText}>Đã hết giao dịch</Text>
      </ScrollView>
    </>
  );
};

export default CardList;

const styles = StyleSheet.create({
  footText: {
    paddingVertical: 50,
    textAlign: "center",
  },
});
