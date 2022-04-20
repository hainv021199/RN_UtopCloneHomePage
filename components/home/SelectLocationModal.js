import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import location from "../../data/location";
const background = require("../../assets/locations.jpg");
const SelectLocationModal = ({ onClose, setLocation }) => {
  const handleClose = () => {
    onClose();
  };
  const handleSelect = (index) => {
    setLocation(index);
  };
  return (
    <View style={[styles.container]}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Chọn Tỉnh / Thành phố</Text>
          <TouchableOpacity style={styles.closeBtn} onPress={handleClose}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.background, styles.spaceBottom]}>
          <Image source={background} style={styles.backgroundImage}></Image>
        </View>
        <View style={styles.spaceBottom}>
          <Text style={[styles.pale, styles.spaceTop]}>Từ khoá hot</Text>
          <View style={[styles.row, styles.spaceTop]}>
            <TouchableOpacity style={styles.btn}>
              <Text>Đà nẵng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text>Hà Nội</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text>TP HCM</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={[styles.spaceTop, styles.spaceBottom, styles.bold]}>
          Danh sách các tỉnh thành
        </Text>
        <ScrollView style={styles.scrollField}>
          {location.map((item, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={styles.selectItem}
                onPress={() => handleSelect(i)}
              >
                <Text style={styles.spaceLeft}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default SelectLocationModal;

const styles = StyleSheet.create({
  pale: {
    color: "#333",
  },
  spaceBottom: {
    marginBottom: 8,
  },
  bold: {
    fontWeight: "bold",
  },
  spaceTop: {
    marginTop: 8,
  },
  spaceLeft: {
    marginLeft: 8,
  },
  row: {
    flexDirection: "row",
  },
  header: {
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  title: {
    fontWeight: "bold",
    padding: 8,
  },
  closeBtn: {
    position: "absolute",
    right: -8,
    padding: 8,
  },
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  card: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 16,
    marginHorizontal: 16,
    paddingHorizontal: 16,
  },
  relativePosition: {
    position: "relative",
  },
  background: {
    marginLeft: -16,
    marginRight: -16,
  },
  backgroundImage: {
    width: "100%",
    height: 200,
  },
  btn: {
    backgroundColor: "#ccc",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 8,
  },
  scrollField: {
    height: 200,
  },
  selectItem: {
    paddingVertical: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
