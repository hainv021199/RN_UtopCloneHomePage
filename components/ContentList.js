import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ContentItem from "./ContentItem";

const ContentList = ({ myData, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold", paddingVertical: 16 }}>
        Khám phá
      </Text>
      {myData.map((d, i) => {
        return <ContentItem myData={d} navigation={navigation}></ContentItem>;
      })}
    </View>
  );
};

export default ContentList;

const styles = StyleSheet.create({
  container: {},
});
