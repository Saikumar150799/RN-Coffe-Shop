import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Option = ({ title }) => {
  return (
    <TouchableOpacity style={styles.optionContainer}>
      <Text style={styles.verticalText}>{title}</Text>
    </TouchableOpacity>
  );
};

const SideBar = () => {
  const DATA = ["Cappuccino", "Latte", "Americano", "Espresso", "Flat White"];
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Option title={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={<View height={hp(1)}></View>}
        contentContainerStyle={{ backgroundColor:"green",justifyContent:"center", alignItems:"center", height: hp(60)} }
      />
    </View>
  );
};

export default SideBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#704341",
    flex: 1,
    justifyContent:"space-between",
    alignItems: "flex-start",
    padding: hp(1),
    width: wp(20),
  },
  optionContainer: {
    height: hp(11),
    padding: hp(0.9),
    transform: [{rotate:"-90deg"}],
    backgroundColor: "red",
    justifyContent: "center", // Center the text vertically within the container
    alignItems: "center", // Center the text horizontally within the container // Add some spacing between options
  },
  verticalText: {
    // transform: [{ rotate: "-90deg" }], // Rotate text 90 degrees
    fontSize: 18,
  },
});
