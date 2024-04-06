// import necessary modules
import { View, Text, ScrollView } from "react-native";
import React from "react";
import ItemCard from "./itemCard";

export default function FeaturedRow({ name, categories }) {
  return (
    // container View for the row of categories (Main Stays, Burgers...)
    <View>
      {/* View for section header */}
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{name}</Text>
        </View>
      </View>

      {/* ScrollView for displaying featured items */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="overflow-visible py-5"
      >
        {/* map over categories array and render each category as an ItemCard */}
        {categories.map((category, index) => {
          // render ItemCard for each category
          return <ItemCard item={category} key={index} />;
        })}
      </ScrollView>
    </View>
  );
}
