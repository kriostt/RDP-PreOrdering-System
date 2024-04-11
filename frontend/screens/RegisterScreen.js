// import necessary modules
import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";
import CustomButton from "../components/customButton";
import InputField from "../components/inputField";

export default function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ paddingHorizontal: 25 }}>
        {/* title */}
        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
          }}
        >
          Register
        </Text>

        {/* full name input */}
        <InputField
          label={"Full Name"}
          icon={<Icon.User size={20} color="#666" style={{ marginRight: 5 }} />}
        />

        {/* email input */}
        <InputField
          label={"Email"}
          icon={
            <Icon.AtSign size={20} color="#666" style={{ marginRight: 5 }} />
          }
          keyboardType="email-address"
        />

        {/* password input */}
        <InputField
          label={"Password"}
          icon={<Icon.Lock size={20} color="#666" style={{ marginRight: 5 }} />}
          inputType="password"
        />

        {/* confirm password input */}
        <InputField
          label={"Confirm Password"}
          icon={<Icon.Lock size={20} color="#666" style={{ marginRight: 5 }} />}
          inputType="password"
        />

        {/* register button */}
        <CustomButton label={"Register"} onPress={() => {}} />

        {/* login link for existing users */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "#084b8d", fontWeight: "700" }}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
