// import necessary modules
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import * as Icon from "react-native-feather";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import { themeColors } from "../theme";
import DishRow from "../components/dishRow";
import CartIcon from "../components/cartIcon";
import { urlFor } from "../sanity";
import { setCategory } from "../slices/categorySlice";

export default function ItemScreen() {
  // accessing route parameters and navigation hook
  const { params } = useRoute();
  const navigation = useNavigation();

  // extracting item data from route parameters
  let item = params;

  // Redux dispatch function
  const dispatch = useDispatch();

  // effect to set category when item is loaded
  useEffect(() => {
    if (item && item._id) {
      dispatch(setCategory({ ...item }));
    }
  }, []);

  return (
    // container View for ItemScreen
    <View>
      {/* render CartIcon component */}
      <CartIcon />

      {/* StatusBar */}
      <StatusBar style="light" />

      {/* ScrollView for scrollable content */}
      <ScrollView>
        {/* image section */}
        <View className="relative">
          <Image
            className="w-full h-72"
            source={{ uri: urlFor(item.image).url() }}
          />
          {/* back button */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        {/* details section */}
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <Text className="text-gray-500 text-xs">{item.description}</Text>
            {/* description */}
            <Text className="text-gray-500 mt-2"></Text>
          </View>
        </View>

        {/* menu section */}
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          
          {/* dishes */}
          {item.dishes.map((dish, index) => (
            <DishRow item={{ ...dish }} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  ); 
}
