import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { COLORS } from "../utils";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SearchInput from "../components/SearchInput";
import SideBar from "../components/SideBar";
import CoffeeList from "../components/CoffeeList";

const HomeScreen = () => {
  const [coffeeList, setCoffeeList] = useState([]);

  const getCoffeeList = async () => {
    fetch("https://fake-coffee-api.vercel.app/api")
      .then((res) => res.json())
      .then((data) => setCoffeeList(data))
      .catch((err) => console.log(err));
  };

  const getCoffeeList2 = async () => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((res) => res.json())
      .then((data) => {
        setCoffeeList(data);
      })
      .catch((err) => console.log(err));
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        await getCoffeeList();
        await getCoffeeList2();
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header  */}
      <Header />

      {/* search */}
      <SearchInput />

      {/* sidebar */}
      {/* <SideBar />  */}
      <CoffeeList coffeeList={coffeeList}/>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: COLORS.PRIMARY,
    paddingHorizontal: hp(2),
  },
});
