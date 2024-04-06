// import necessary modules
import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import { themeColors } from "../theme"; 
import { urlFor } from "../sanity";
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from "../slices/cartSlice";

export default function DishRow({ item }) {
  // initialize dispatch hook
  const dispatch = useDispatch();

  // select total items of this dish from the cart using selector function
  const totalItems = useSelector((state) =>
    selectCartItemsById(state, item._id)
  );

  // function to handle increase in quantity of the dish
  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };

  // function to handle decrease in quantity of the dish
  const handleDecrease = () => {
    dispatch(removeFromCart({ id: item._id }));
  };

  return (
    // container for each dish row when clicking on category
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      
      {/* image component for dish image */}
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={{ uri: urlFor(item.image).url() }}
      />

      {/* container View for dish details */}
      <View className="flex flex-1 space-y-3">
        {/* View for dish name and description */}
        <View className="pl-3">
          {/* name */}
          <Text className="text-xl">{item.name}</Text>
          {/* description */}
          <Text className="text-gray-700 text-xs">{item.description}</Text>
        </View>

        {/* View for price and quantity controls */}
        <View className="flex-row justify-between pl-3 items-center">

          <Text className="text-gray-700 text-lg font-bold">
            {" "}
            $ {item.price}
          </Text>

          {/* View for quantity controls */}
          <View className="flex-row items-center">
            {/* TouchableOpacity for decrease quantity */}
            <TouchableOpacity
              onPress={handleDecrease}
              disabled={!totalItems.length}
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              {/* feather icon for minus */}
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={"white"}
              />
            </TouchableOpacity>
            <Text className="px-3">{totalItems.length}</Text>

            {/* TouchableOpacity for increase quantity */}
            <TouchableOpacity
              onPress={handleIncrease}
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              {/* feather icon for plus */}
              <Icon.Plus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={"white"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
