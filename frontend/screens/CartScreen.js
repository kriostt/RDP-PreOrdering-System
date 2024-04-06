// import necessary modules 
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { themeColors } from "../theme";
import { selectCategory } from "../slices/categorySlice";
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../slices/cartSlice";
import { urlFor } from "../sanity";

export default function CartScreen() {
  // Redux state selectors
  const category = useSelector(selectCategory);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  // React Navigation hook
  const navigation = useNavigation();

  // Redux dispatch function
  const dispatch = useDispatch();

  // calculate GST
  const GST = cartTotal * 0.05;

  // state to store grouped items
  const [groupedItems, setGroupedItems] = useState({});

  // effect to group cart items
  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item._id]) {
        group[item._id].push(item);
      } else {
        group[item._id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [cartItems]);

  // function to handle place order button press
  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      // if cart is empty, show a notification
      Alert.alert(
        "Empty Cart",
        "Please add items to your cart before placing an order."
      );
    } else {
      // navigate to SuccessfulMessage screen
      navigation.navigate("SuccessfulMessage");
    }
  };

  return (
    // container View for CartScreen
    <View className="bg-white flex-1">
      {/* back button */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={"white"} />
        </TouchableOpacity>

        <View>
          <Text className="text-center font-bold text-xl">Your cart</Text>
        </View>
      </View>

      {/* dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="bg-white pt-5"
      >
        {/* map over groupedItems and render each group */}
        {Object.entries(groupedItems).map(([key, items]) => {
          let dish = items[0];

          return (
            // container View for each group
            <View
              key={key}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
            >
              {/* quantity */}
              <Text className="font-bold" style={{ color: themeColors.text }}>
                {items.length} x
              </Text>
              {/* image */}
              <Image
                className="h-14 w-14 rounded-full"
                source={{ uri: urlFor(dish.image).url() }}
              />
              {/* dish name */}
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              {/* price */}
              <Text className="font-semibold text-base">$ {dish.price}</Text>

              {/* remove button */}
              <TouchableOpacity
                onPress={() => dispatch(removeFromCart({ id: dish._id }))}
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke="white"
                />
              </TouchableOpacity>
            </View>
          );
        })}   
      </ScrollView>

      {/* total */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="p-6 px-8 rounded-t-3xl space-y-4"
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">$ {cartTotal}</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-gray-700">GST</Text>
          <Text className="text-gray-700">$ {GST.toFixed(2)}</Text>
        </View>

        <View className="flex-row justify-between mb-4">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">
            $ {(cartTotal + GST).toFixed(2)}
          </Text>
        </View>

        {/* place order button */}
        <View>
          <TouchableOpacity
            onPress={handlePlaceOrder}
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
