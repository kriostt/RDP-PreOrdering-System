// import necessary modules
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { themeColors } from "../theme";
import { selectCartItems, selectCartTotal } from "../slices/cartSlice";

export default function CartIcon() {
  // initialize navigation hook
  const navigation = useNavigation();
  // get cart items from Redux store
  const cartItems = useSelector(selectCartItems);
  // get total cart value from Redux store
  const cartTotal = useSelector(selectCartTotal);

  // if there are no items in the cart, return nothing
  if (!cartItems.length) return;

  return (
    // container for the "View Cart"
    <View className="absolute bottom-5 w-full z-50">

      {/* navigate to the Cart screen on press */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
      >

        {/* display the number of items in the cart*/}
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <Text className="font-extrabold text-white text-lg">
            {cartItems.length}
          </Text>
        </View>

        {/* text to display "View Cart" */}
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          View Cart
        </Text>

        {/* text to display the total value of items in the cart */}
        <Text className="font-extrabold text-white text-lg">   
          {" "}       
          $ {cartTotal}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
