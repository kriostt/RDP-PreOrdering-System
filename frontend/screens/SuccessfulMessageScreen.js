import { View, Text, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { emptyCart } from "../slices/cartSlice";

export default function SuccessfulMessageScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const clearCart = () => {
    navigation.navigate("Home");
    dispatch(emptyCart());
  };

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Icon.CheckCircle strokeWidth={2} height={60} width={30} color="green" />
      <Text className="text-center font-semibold text-md">
        Your order has been placed successfully!
      </Text>
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
