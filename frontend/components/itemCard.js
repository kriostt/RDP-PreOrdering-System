// import necessary modules
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import { urlFor } from "../sanity";

export default function ItemCard({ item }) {
  // initialize navigation hook
  const navigation = useNavigation();

  return (
    // TouchableWithoutFeedback to navigate to ItemScreen (displays all dishes in that category)
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Item", { ...item })}
    >
      {/* container View for item card */}
      <View
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
        }}
        className="mr-6 bg-white rounded-3xl shadow-lg"
      >
        {/* image component for item image */}
        <Image
          className="h-36 w-64 rounded-t-3xl"
          source={{ uri: urlFor(item.image).url() }}
        />

        {/* View for item details */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="px-3 pb-4 space-y-2"
        >
          {/* text component for item name */}
          <Text style={{ flex: 1 }} className="text-lg font-bold pt-2">
            {item.name}
          </Text>

          {/* text component for "see all" */}
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
