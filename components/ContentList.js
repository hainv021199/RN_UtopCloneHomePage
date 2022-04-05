import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ContentItem from "./ContentItem";

const ContentList = ({ myData, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold", paddingVertical: 16 }}>
        Khám phá
      </Text>
      <FlatList
        data={myData}
        initialNumToRender={7}
        renderItem={({ item, id }) => {
          return (
            <ContentItem
              key={item.title + id}
              myData={item}
              navigation={navigation}
            ></ContentItem>
          );
        }}
      ></FlatList>
    </View>
  );
};

export default ContentList;

const styles = StyleSheet.create({
  container: {},
});
