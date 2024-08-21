import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../utils";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-virtualized-view";
const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
    <View>
      <View style={styles.profileBG}>
        <Image
          style={styles.profileBGImage}
          source={require("../assets/welcome.png")}
        />
        {/* <View style={styles.profileBGHeader}> */}
        {/* <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color={COLORS.WHITE} />
          </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.share}>
            <Feather name="share-2" size={20} color={COLORS.WHITE} />
          </TouchableOpacity> */}
        {/* </View> */}
      </View>

      <View style={styles.profileImageBG}>
        <Image
          style={styles.profileImage}
          source={require("../assets/profile.png")}
        />
        <Text style={styles.userName}>SAI KUMAR</Text>
      </View>
      <View style={styles.userInfo}>
        <View style={styles.field}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.input}>Sai Kumar</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Email I'd</Text>
          <Text style={styles.input}>saikumar150799@gmail.com</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Phone Number</Text>
          <Text style={styles.input}>+91 7204925389</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Password</Text>
          <Text style={styles.input}>••••••••</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Date Of Birth</Text>
          <Text style={styles.input}>15/07/1999</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateText}>Update</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    // position: "relative",
  },
  profileBG: {
    // position: "relative",
  },
  profileBGImage: {
    width: "100%",
    height: hp(20),
  },
  profileBGHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // position: "absolute",
    paddingHorizontal: wp(3),
    top: hp(5),
  },
  profileImageBG: {},
  profileImage: {
    // backgroundColor:COLORS.WHITE,
    width: 130,
    height: 130,
    borderRadius: "100%",
    borderWidth: hp(0.7),
    borderColor: COLORS.WHITE,
    marginTop: -100,
    marginLeft: wp(35),

    // backgroundColor: "red"
  },
  userInfo: {
    paddingHorizontal: hp(2),
  },
  field: {
    marginBottom: hp(2),
  },
  userName: {
    color: COLORS.SECONDARY,
    fontWeight: "bold",
    fontSize: hp(2.5),
    textAlign: "center",
    marginTop: hp(1),
  },
  label: {
    color: COLORS.SECONDARY,
    fontSize: hp(1.7),
    marginBottom: hp(1),
    fontWeight: "700",
  },
  input: {
    borderWidth: hp(0.2),
    borderColor: COLORS.SECONDARY,
    padding: hp(1),
    color: COLORS.SECONDARY,
    fontSize: hp(2),
    borderRadius: hp(1),
  },
  updateButton: {
    backgroundColor: COLORS.SECONDARY,
    padding: hp(2),
    marginHorizontal: hp(2),
    borderRadius: hp(10),
    marginTop: hp(2),
  },
  updateText: {
    color: COLORS.PRIMARY,
    fontSize: hp(2.5),
    fontWeight: "700",
    textAlign: "center",
  }
});
