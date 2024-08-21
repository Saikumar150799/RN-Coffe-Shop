import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../utils";
const Coupon = () => {
  return (
    <View style={styles.container}>
        <View style={styles.leftPuch}></View>
      <TouchableOpacity style={styles.CouponCard}>
        <Text style={styles.couponText}>Apply Coupon Code</Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={20}
          color={COLORS.SECONDARY}
        />
      </TouchableOpacity>
      <View style={styles.rightPuch}></View>
    </View>
  );
};

export default Coupon;

const styles = StyleSheet.create({
    container: {

    },
  CouponCard: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.DARK_GRAY,
    paddingVertical: hp(1.5),
    paddingHorizontal: hp(5),
    width: "100%",
    
    position:"relative",
  },
  couponText: {
    fontSize: hp(2),
    color: COLORS.SECONDARY,
  },
  leftPuch: {
    backgroundColor: COLORS.PRIMARY,
    height: hp(3),
    aspectRatio: 1 / 1,
    borderRadius: "50%",
    zIndex: 100,
    position: "absolute",
    top: hp(1.3),
    marginLeft: -hp(1.5)
  },
  rightPuch: {
    backgroundColor: COLORS.PRIMARY,
    height: hp(3),
    aspectRatio: 1 / 1,
    borderRadius: "50%",
    zIndex: 100,
    position: "absolute",
    top: hp(1.3),
    right: 0,
    marginRight: -hp(1.5)
  }
});
