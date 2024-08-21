import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";

import FavouriteScreen from "../screens/FavouriteScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import { COLORS } from "../utils";
import { useCartStore } from "../store";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const cartLength = useCartStore(state => state.cartLength())
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { 
          backgroundColor: COLORS.PRIMARY,
          borderTopWidth: 0,
          shadowColor: COLORS.SECONDARY,
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <AntDesign
                name="home"
                size={30}
                color={focused ? COLORS.SECONDARY : color}
              />
            );
          },
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "heart" : "heart-outline"}
                size={30}
                color={focused ? COLORS.SECONDARY : color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "cart" : "cart-outline"}
                size={30}
                color={focused ? COLORS.SECONDARY : color}
              />
            );
          },
          tabBarBadge: cartLength > 0 ? cartLength : null,
          tabBarBadgeStyle: { backgroundColor: COLORS.SECONDARY },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialIcons
                name="account-circle"
                size={30}
                color={focused ? COLORS.SECONDARY : color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
