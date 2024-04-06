// import necessary modules
import { View, Text, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { emptyCart } from "../slices/cartSlice";

export default function SuccessfulMessageScreen() {
  // React navigation hook for navigation
  const navigation = useNavigation();

  // Redux dispatch function
  const dispatch = useDispatch();

  // function to clear cart and navigate back to Home screen
  const clearCart = () => {
    navigation.navigate("Home");
    dispatch(emptyCart());
  };

  return (
    // container View for SuccessfulMessageScreen
    <View className="flex-1 bg-white justify-center items-center">
      {/* success icon */}
      <Icon.CheckCircle strokeWidth={2} height={60} width={30} color="green" />

      {/* success message */}
      <Text className="text-center font-semibold text-md">
        Your order has been placed successfully!
      </Text>

      {/* back to Home button */}
      <View className="mt-8">
        <TouchableOpacity
          onPress={clearCart}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Text className="text-white text-center font-bold text-md">
            Back to Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
