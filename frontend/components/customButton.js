import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";

// define custom button
export default function CustomButton({ label, onPress }) {
  return (
    // handle button press
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: themeColors.bgColor(1),
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}
    >
      {/* display button label */}
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: 16,
          color: "#fff",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
