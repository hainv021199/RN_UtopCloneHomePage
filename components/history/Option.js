import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Option = ({ text, chosed, setSelected }) => {
  return (
    <TouchableOpacity
      onPress={() => setSelected(text)}
      style={[styles.option, styles.roundBorder, chosed && styles.borderChosed]}
    >
      <Text style={chosed ? styles.textChosed : styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Option;

const styles = StyleSheet.create({
  textChosed: {
    color: "orange",
  },
  borderChosed: {
    borderColor: "orange",
  },
  text: {
    color: "black",
  },
  option: {
    width: "32%",
    justifyContent: "center",
    alignItems: "center",
  },
  roundBorder: {
    flexDirection: "row",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
});
