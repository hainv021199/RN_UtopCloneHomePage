import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
} from "react-native";
import React from "react";
import HistoryCard from "./HistoryCard";
import historyData from "../../data/history";
let x = 0;
const CardList = () => {
  let [refreshing, setRefreshing] = React.useState(false);
  let [loading, setLoading] = React.useState(false);
  let [data, setData] = React.useState([]);
  React.useEffect(() => {
    getData();
    setLoading(true);
  }, []);
  const getData = () => {
    fetch(`https://picsum.photos/v2/list?page=${x}&limit=5`)
      .then((response) => response.json())
      .then((resData) => {
        setData([...data, ...resData]);
        setLoading(false);
      });
  };
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  const viewMore = () => {
    getData();
    setLoading(true);
  };
  const renderItem = ({ item }) => {
    return <HistoryCard></HistoryCard>;
  };
  const footerComponent = () => {
    return (
      <View style={{ width: "100%", alignItems: "center" }}>
        <ActivityIndicator
          animating={loading}
          size="large"
          color="orange"
        ></ActivityIndicator>
      </View>
    );
  };
  return (
    <>
      {/* <FlatList
        style={{ flex: 1 }}
        initialNumToRender={5}
        data={data}
        extraData={(item) => item.id.toString()}
        onEndReachedThreshold={0.03}
        renderItem={renderItem}
        ListFooterComponent={footerComponent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onEndReached={({ distanceFromEnd }) => {
          console.log("distanceFromEnd", distanceFromEnd);
          if (distanceFromEnd < 0) {
            return;
          }
          viewMore();
        }}
        ></FlatList> */}
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
