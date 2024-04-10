// import necessary modules
import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import CustomButton from "../components/customButton";
import InputField from "../components/inputField";
// import { AuthContext } from "../context/AuthContext";

export default function LoginScreen({ navigation }) {
  // const {login} = useContext(AuthContext);

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
          Login
        </Text>

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
          fieldButtonLabel={"Forgot password?"}
          fieldButtonFunction={() => {}} // edit to add
        />

        {/* login button */}
        <CustomButton
          label={"Login"}
          onPress={() => {
            login();
          }}
        />

        {/* register link for new users */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: "#084b8d", fontWeight: "700" }}>
              {" "}
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
