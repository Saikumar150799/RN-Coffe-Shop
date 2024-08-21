import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IMAGES, COLORS } from "../utils";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";


const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" source={IMAGES.welcome} style={styles.image} />
      <LinearGradient
        colors={["transparent", "#000"]}
        start={{ x: 0.9, y: 0.2 }}
        end={{ x: 1, y: 0.6 }}
        style={styles.linearGradient}
      >
        <Text style={styles.text}>
          Fall in Love with Coffee in Blissful Delight!
        </Text>
        <Text style={styles.subText}>
          Welcome to our cozy coffee corner, where every cup is a delightful for
          you.
        </Text>
        <TouchableOpacity style={styles.getStartedButton} onPress={()=> navigation.navigate('Home')}>
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: wp(100),
    height: hp(65),
  },
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    width: wp(100),
    height: hp(70),
    paddingBottom: hp(10),
  },
  welcomeImage: {
    width: wp(100),
    height: hp(50),
  },
  text: {
    color: COLORS.WHITE,
    fontSize: hp(5),
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "Sora-Bold"
  },
  subText: {
    color: COLORS.GRAY,
    textAlign: "center",
    width: wp(80),
    lineHeight: hp(2.5),
    fontSize: hp(1.7),
    marginTop: hp(3),
    marginBottom: hp(3),
  },
  getStartedButton: {
    backgroundColor: COLORS.SECONDARY,
    width: wp(90),
    padding: hp(2),
    borderRadius: hp(2),
    alignContent: "center",
  },
  getStartedButtonText: {
    textAlign: "center",
    alignContent: "center",
    fontSize: hp(2),
    fontWeight: "bold",
  },
});
