import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

// define custom input field
export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) {
  return (
    // container View for the input field
    <View
      style={{
        flexDirection: "row",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}
    >
      {/* display the icon */}
      {icon}

      {/* if input type is password, render a secure TextInput */}
      {inputType == "password" ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
          secureTextEntry={true}
        />
      ) : (
        // if not, render a normal TextInput
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
        />
      )}

      {/* button used for Forgot password */}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{ color: "#084b8d", fontWeight: "700" }}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
