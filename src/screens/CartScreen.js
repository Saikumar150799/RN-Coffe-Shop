import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import LottieView from "lottie-react-native";

import React, { useRef } from "react";
import { useCartStore } from "../store";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../utils";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Entypo from "@expo/vector-icons/Entypo";
import Coupon from "../components/Coupon";
const ItemCard = ({ data: { name, price, imageUrl } }) => {
  return (
    <View style={styles.card}>
      <View style={styles.itemInfo}>
        <Image
          resizeMode="cover"
          source={{ uri: imageUrl }}
          style={styles.image}
        />
        <View>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>Flavour</Text>
          <Text style={styles.price}>₹{price}</Text>
        </View>
      </View>

      <View style={styles.cardButtonsContainer}>
        <TouchableOpacity style={styles.btn}>
          <Entypo name="plus" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.quantity}>{30}</Text>
        <TouchableOpacity style={styles.btn}>
          <Entypo name="minus" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CartScreen = () => {
  const Cart = useCartStore((state) => state.cart);
  const animation = useRef(null);
  const DATA = [
    // {
    //   rating: "4.5",
    //   name: "Cinnamon & Cocoa",
    //   price: "50",
    //   imageUrl:
    //     "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    // },
    // {
    //   rating: "4.5",
    //   name: "Cinnamon & Cocoa",
    //   price: "50",
    //   imageUrl:
    //     "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    // },
    // {
    //   rating: "4.5",
    //   name: "Cinnamon & Cocoa",
    //   price: "50",
    //   imageUrl:
    //     "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    // },
    // {
    //   rating: "4.5",
    //   name: "Cinnamon & Cocoa",
    //   price: "50",
    //   imageUrl:
    //     "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    // },
  ];
  return (
    <>
      <SafeAreaView style={styles.container}>
        {DATA.length > 0 ?
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.cartHeader}>Cart</Text>

          <FlatList
            data={DATA}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => <ItemCard data={item} />}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={<View style={{ height: hp(1) }}></View>}
          />
          <View style={styles.dashedBorder}></View>

          {/* COUPON CARD */}
          <Coupon />

          {/* Delivery charges */}
          <View style={styles.deliveryCharges}>
            <View style={styles.charges}>
              <Text style={styles.text}>Delivery Charges</Text>
              <Text style={styles.price}>₹30</Text>
            </View>
            <View style={styles.charges}>
              <Text style={styles.text}>Taxes</Text>
              <Text style={styles.price}>₹30</Text>
            </View>
          </View>

          <View style={styles.dashedBorder}></View>

          <View style={styles.grandTotal}>
            <Text style={styles.grandTotalText}>Grand Total</Text>
            <Text style={styles.grandTotalAmount}>₹30</Text>
          </View>

          <TouchableOpacity style={styles.payNowBtn}>
            <Text style={styles.payNowText}>PAY NOW</Text>
          </TouchableOpacity>
        </ScrollView>
        : <View>
          <Image source={require('../assets/welcome.png')}/>
        </View>}
      </SafeAreaView>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: COLORS.PRIMARY,
    paddingHorizontal: hp(2),
  },
  animationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY,
  },
  cartHeader: {
    fontSize: hp(3),
    color: COLORS.WHITE,
    fontWeight: "400",
    letterSpacing: hp(0.2),
    textAlign: "center",
    marginBottom: hp(2),
  },
  image: {
    width: wp(20),
    aspectRatio: 3 / 3,
    borderRadius: hp(1.5),
    marginRight: hp(1),
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.PRIMARY_OPACITY,
    padding: hp(1.5),
    borderRadius: hp(1.5),
  },
  itemInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: COLORS.WHITE,
    fontSize: hp(2),
    marginBottom: hp(1),
  },
  price: {
    color: COLORS.WHITE,
    fontSize: hp(2),
    fontWeight: "bold",
  },
  cardButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY_OPACITY,
  },
  btn: {
    backgroundColor: COLORS.SECONDARY,
    padding: hp(0.5),
    borderRadius: hp(1),
  },
  quantity: {
    marginHorizontal: wp(1),
    color: COLORS.WHITE,
    fontSize: hp(2.5),
  },
  dashedBorder: {
    borderWidth: hp(0.1),
    borderColor: COLORS.PRIMARY_OPACITY,
    borderStyle: "dashed",
    marginVertical: hp(2),
  },
  charges: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deliveryCharges: {
    marginTop: hp(2),
  },
  grandTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  grandTotalText: {
    fontSize: hp(2.5),
    color: COLORS.WHITE,
  },
  grandTotalAmount: {
    fontSize: hp(2.5),
    color: COLORS.WHITE,
    fontWeight: "600",
  },
  payNowBtn: {
    backgroundColor: COLORS.SECONDARY,
    padding: hp(2),
    marginTop: hp(2),
    borderRadius: hp(2),
  },
  payNowText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: hp(2),
  },
});
