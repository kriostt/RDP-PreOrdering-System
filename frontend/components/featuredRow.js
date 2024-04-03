import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import ItemCard from "./itemCard";

export default function FeaturedRow({ name, description, dish }) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{name}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        {/* <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold">
            See All
          </Text>
        </TouchableOpacity> */}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="overflow-visible py-5"
      >
        {dish.map((dish, index) => {
          return <ItemCard item={dish} key={index} />;
        })}
      </ScrollView>
    </View>
  );
}
