import { StyleSheet, Text, View } from "react-native";
import React from "react";

const UtopPoint = () => {
  return (
    <View style={styles.points}>
      <Text style={{ fontWeight: "bold" }}>Điểm Utop của bạn</Text>
      <Text style={{ color: "red", fontWeight: "bold" }}>150</Text>
    </View>
  );
};

export default UtopPoint;

const styles = StyleSheet.create({
  points: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 12,
    fontWeight: "bold",
  },
});
