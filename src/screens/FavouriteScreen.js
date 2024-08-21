import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCartStore } from '../store'

const FavouriteScreen = () => {
  const FAVOURITES = useCartStore(state => state.Favourites);
  console.log("Favourites", FAVOURITES);
  return (
    <View>
      <Text>FavouriteScreen</Text>
    </View>
  )
}

export default FavouriteScreen

const styles = StyleSheet.create({})