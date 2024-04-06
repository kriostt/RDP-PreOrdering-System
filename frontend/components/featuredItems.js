// import necessary modules
import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { urlFor } from "../sanity";

export default function FeaturedItems({ name, dishes }) {
  return (
    // container for FeaturedItems component on HomeScreen
    <View>
      {/* View for section header */}
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{name}</Text>
        </View>
      </View>

      {/* ScrollView for displaying featured dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 15,
          paddingHorizontal: 15,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
        className="overflow-visible py-5"
      >
        {/* map over dishes array and render each dish */}
        {dishes.map((dish) => (
          <View
            key={dish._id}
            style={{
              width: "48%",
              height: 185,
              shadowColor: themeColors.bgColor(0.2),
              shadowRadius: 7,
              marginRight: 6,
              backgroundColor: "white",
              borderRadius: 20,
              shadowOpacity: 0.5,
              elevation: 5,
              marginBottom: 20,
            }}
            className="rounded-3xl shadow-lg"
          >
            {/* image component for dish image */}
            <Image
              style={{
                height: 150,
                width: "100%",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
              source={{ uri: urlFor(dish.image).url() }}
            />

            {/* View for dish name */}
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                {dish.name}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
