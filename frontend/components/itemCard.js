import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";

export default function ItemCard({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Item", { ...item })}
    >
      <View
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
        }}
        className="mr-6 bg-white rounded-3xl shadow-lg"
      >
        <Image
          className="h-36 w-64 rounded-t-3xl"
          source={{ uri: urlFor(item.image).url() }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="px-3 pb-4 space-y-2"
        >
          <Text style={{ flex: 1 }} className="text-lg font-bold pt-2">
            {item.name}
          </Text>
          <Text
            style={{ textAlign: "right", marginRight: 5 }}
            className="text-gray-600 text-s"
          >
            see all
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
