import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS } from "../utils";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const SearchInput = () => {
  return (
    <View style={styles.searchBar}>
      <FontAwesome
        style={styles.searchIcon}
        name="search"
        size={20}
        color={COLORS.SECONDARY}
      />
      <TextInput
        placeholder="Browse your favourite coffee..."
        placeholderTextColor={COLORS.SECONDARY_OPACITY}
        style={styles.SearchInput}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    backgroundColor: COLORS.TERNORY,
    padding: hp(2),
    borderRadius: hp(1),
  },
  searchIcon: {
    marginRight: hp(1),
  },
  SearchInput: {
    color: COLORS.WHITE,
    fontSize: hp(1.8)
  }
});
