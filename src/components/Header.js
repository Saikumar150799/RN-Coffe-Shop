import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { IMAGES, COLORS } from "../utils";

import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={IMAGES.logo} />
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Image source={IMAGES.profile} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
