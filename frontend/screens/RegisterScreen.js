// import necessary modules
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import CustomButton from "../components/customButton";
import InputField from "../components/inputField";
import useRegister from "../hooks/useRegister";

export default function RegisterScreen({ navigation }) {
  // destructure values from useRegister hook
  const { registerUser } = useRegister();

  // state variables for form inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // function to handle registration
  const handleRegister = () => {
    const userData = { username, email, password, confirmPassword };
    registerUser(userData); // call registerUser function from hook
  };

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

        {/* username input */}
        <InputField
          label={"Username"}
          icon={<Icon.User size={20} color="#666" style={{ marginRight: 5 }} />}
          value={username}
          onChangeText={setUsername}
        />

        {/* email input */}
        <InputField
          label={"Email"}
          icon={
            <Icon.AtSign size={20} color="#666" style={{ marginRight: 5 }} />
          }
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* password input */}
        <InputField
          label={"Password"}
          icon={<Icon.Lock size={20} color="#666" style={{ marginRight: 5 }} />}
          inputType="password"
          value={password}
          onChangeText={setPassword}
        />

        {/* confirm password input */}
        <InputField
          label={"Confirm Password"}
          icon={<Icon.Lock size={20} color="#666" style={{ marginRight: 5 }} />}
          inputType="password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* register button */}
        <CustomButton label={"Register"} onPress={handleRegister} />

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
