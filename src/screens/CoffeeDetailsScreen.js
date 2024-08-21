import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import { getStatusBarHeight } from "react-native-status-bar-height";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../utils";
import { ScrollView } from "react-native-virtualized-view";
import { useCartStore } from "../store";

const ChoiceItem = ({ onChoicePress, value, choice }) => {
  const activeTab = value === choice;
  return (
    <TouchableOpacity
      style={[
        styles.ChoiceItem,
        activeTab ? { backgroundColor: COLORS.SECONDARY } : null,
      ]}
      onPress={() => onChoicePress(value)}
    >
      <Text
        style={[
          styles.choiceValue,
          activeTab ? { color: COLORS.PRIMARY } : null,
        ]}
      >
        {value}
      </Text>
    </TouchableOpacity>
  );
};

const CoffeeDetailsScreen = () => {
  const route = useRoute();
  const coffee = route?.params?.coffee;
  const navigation = useNavigation();
  const CHOICES = ["Oat Milk", "Soy Milk", "Almond Milk"];

  const [isFavorite, setIsFavourite] = useState(false);

  const [favourites, setFavourites] = useState([]);

  const [choice, setChoice] = useState("");

  const description =
    "A single espresso shot poured into hot foamy milk, with the surfacetopped with mildly sweetened cocoa powder and drizzled with scrumptious caramel syrup. A single espresso shot poured into hot foamy milk, with the surface topped with mildly sweetened cocoa powder and drizzled with scrumptious caramel syrup";

  const [numberOfLines, setNumberOfLines] = useState(3);

  const addToFavorite = useCartStore((state) => state.addToFavorite);

  const FAVOURITES = useCartStore((state) => state.Favourites);

  const onChoicePress = (value) => {
    setChoice(value);
  };

  const handlePress = useCallback(() => {
    addToFavorite(coffee);
    setIsFavourite(prevState => !prevState);
  }, [coffee, addToFavorite]);

  useEffect(() => {
    const isItemPresent = FAVOURITES.find((item) => item.id == coffee.id);
    setIsFavourite(isItemPresent ? true : false);
  }, [isFavorite]);

  return (
    <ScrollView style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={COLORS.WHITE} />
        </TouchableOpacity>
        <Image
          resizeMode="cover"
          source={{ uri: coffee.image_url }}
          style={styles.image}
        />

        <View style={styles.coffeeInfo}>
          <View style={styles.InfoHeading}>
            <Text style={styles.headerText}>{coffee.name}</Text>
            <TouchableOpacity
              onPress={handlePress}
            >
              {isFavorite ? (
                <FontAwesome
                  name="heart"
                  size={24}
                  color={COLORS.HEART_COLOR}
                />
              ) : (
                <FontAwesome name="heart-o" size={24} color={COLORS.WHITE} />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.subHeading}>
            <Text style={styles.subHeadingText}>Drizzled with Caramel</Text>
            <View style={styles.rating}>
              <Entypo
                name="star"
                style={styles.starIcon}
                size={15}
                color={COLORS.YELLOW}
              />
              <Text style={styles.ratingValue}>4.5</Text>
            </View>
          </View>

          <Text style={styles.description} numberOfLines={numberOfLines}>
            {coffee.description}
          </Text>

          {coffee.description.length >= 200 ? (
            <TouchableOpacity
              onPress={() => setNumberOfLines(numberOfLines >= 3 ? null : 3)}
            >
              <Text style={styles.readMore}>
                {numberOfLines >= 3 ? "Read More" : "Read Less"}
              </Text>
            </TouchableOpacity>
          ) : null}

          <View style={styles.choices}>
            <Text style={styles.ChoiceText}>Choice of Milk</Text>
            <FlatList
              data={CHOICES}
              horizontal={true}
              // ItemSeparatorComponent={<View style={{width: wp(5)}}></View>}
              renderItem={({ item }) => (
                <ChoiceItem
                  onChoicePress={onChoicePress}
                  value={item}
                  choice={choice}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.priceText}>Price</Text>
          <Text style={styles.priceAmount}>₹{coffee.price}</Text>
        </View>
        <TouchableOpacity style={styles.butNowBtn}>
          <Text style={styles.butNowText}>BUY NOW</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CoffeeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  back: {
    position: "absolute",
    top: hp(5),
    left: hp(2),
    zIndex: 100,
  },
  image: {
    width: "100%",
    height: hp(50),
    borderBottomRightRadius: hp(3),
    borderBottomLeftRadius: hp(3),
  },
  coffeeInfo: {
    marginTop: hp(2),
    padding: hp(2),
  },
  InfoHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: COLORS.WHITE,
    fontSize: hp(2.5),
  },
  subHeading: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: hp(1.5),
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: hp(2),
  },
  subHeadingText: {
    color: COLORS.WHITE,
    fontSize: hp(1.9),
  },
  ratingValue: {
    color: COLORS.WHITE,
    fontSize: hp(1.6),
  },
  description: {
    color: COLORS.WHITE,
    fontSize: hp(1.7),
    lineHeight: hp(2.3),
  },
  ChoiceText: {
    color: COLORS.WHITE,
    fontSize: hp(1.8),
    marginBottom: hp(1.4),
  },
  choices: {
    marginTop: hp(4),
  },
  ChoiceItem: {
    borderWidth: 1,
    borderColor: COLORS.SECONDARY,
    padding: hp(1),
    borderRadius: hp(1),
    marginRight: hp(2),
  },
  choiceValue: {
    color: COLORS.SECONDARY,
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: hp(3),
    padding: hp(2),
  },
  butNowBtn: {
    backgroundColor: COLORS.SECONDARY,
    width: wp(60),
    padding: hp(2),
    borderRadius: hp(1),
  },
  butNowText: {
    textAlign: "center",
    fontSize: hp(2),
    fontWeight: "500",
  },
  priceText: {
    color: COLORS.WHITE,
    fontSize: hp(1.7),
  },
  priceAmount: {
    color: COLORS.WHITE,
    fontSize: hp(2.9),
    fontWeight: "bold",
  },
  readMore: {
    color: COLORS.SECONDARY,
    fontWeight: "bold",
  },
});
