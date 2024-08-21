import {
  FlatList,
  Image,
  Pressable,
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
import { COLORS } from "../utils";
import Entypo from "@expo/vector-icons/Entypo";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { useCartStore } from "../store";

const CoffeeCard = ({ index, coffee, name, rating, price, image }) => {

  const margin = index % 2 === 0 ? wp(2) : 0;

  const addToCart = useCartStore((state) => state.addToCart);

  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.card, { marginRight: margin }]}
      onPress={() => navigation.navigate("CoffeeDetails", {coffee: coffee})}
    >
      <Image
        source={{ uri: image }}
        resizeMode="cover"
        height={hp(20)}
        width={wp(40)}
        style={styles.image}
      />
      <View style={styles.ratingBG}>
        <Entypo
          name="star"
          style={styles.starIcon}
          size={15}
          color={COLORS.YELLOW}
        />
        <Text style={styles.rating}>{rating}</Text>
      </View>

      <Text numberOfLines={1} style={styles.name}>{name}</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>₹{price}</Text>
        <TouchableOpacity
          style={styles.plusBtn}
          onPress={() => addToCart(coffee)}
        >
          <Entypo name="plus" size={24} color={COLORS.PRIMARY} />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

const CoffeeList = ({coffeeList}) => {
  const BottomTabHeight = useBottomTabBarHeight() * 1.6;
  return (
    <View style={[styles.cardContainer, { marginBottom: BottomTabHeight }]}>
      <FlatList
        data={coffeeList}
        renderItem={({ item, index }) => (
          <CoffeeCard
            index={index}
            coffee={item}
            name={item.name}
            rating={item.rating}
            price={item.price}
            image={item.image_url}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={{ gap: hp(1) }}
        ItemSeparatorComponent={<View style={{ width: hp(2) }}></View>}
      />
    </View>
  );
};

export default CoffeeList;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: hp(2),
  },
  card: {
    backgroundColor: COLORS.PRIMARY_OPACITY,
    borderRadius: hp(1),
    padding: hp(1),
    flex: 1,
  },
  image: {
    borderRadius: hp(1),
  },
  ratingBG: {
    backgroundColor: "#414141",

    // opacity: .5,
    padding: hp(0.6),
    position: "absolute",
    marginLeft: hp(1),
    marginTop: hp(1),
    borderTopLeftRadius: hp(1),
    borderBottomRightRadius: hp(1.5),
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    color: COLORS.WHITE,
  },
  starIcon: {
    marginHorizontal: hp(0.5),
  },
  name: {
    color: COLORS.WHITE,
    fontSize: hp(3),
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.WHITE_8_OPACITY,
    borderRadius: hp(1.5),
    marginTop: hp(1),
    // position: "absolute",
    // bottom: 0
  },
  price: {
    color: COLORS.WHITE,
    fontSize: hp(2.5),
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  plusBtn: {
    backgroundColor: COLORS.SECONDARY,
    borderRadius: hp(1),
    padding: hp(1.5),
  },
});
