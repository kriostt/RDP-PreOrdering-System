// import necessary modules
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
// import screens
import LoginScreen from "./screens/LoginAndRegister/LoginScreen";
import RegisterScreen from "./screens/LoginAndRegister/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import ItemScreen from "./screens/ItemScreen";
import CartScreen from "./screens/CartScreen";
import SuccessfulMessageScreen from "./screens/SuccessfulMessageScreen";
import AdminScreen from "./screens/AdminScreen";

// create a stack navigator
const Stack = createNativeStackNavigator();

// function for rendering navigation stack
export default function Navigation() {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to Login screen when the component mounts
    navigation.navigate("Login");
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* ---Stack screens--- */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Admin" component={AdminScreen} />
      <Stack.Screen name="Item" component={ItemScreen} />
      <Stack.Screen
        name="Cart"
        options={{ presentation: "modal" }}
        component={CartScreen}
      />
      <Stack.Screen
        name="SuccessfulMessage"
        options={{ presentation: "fullScreenModal" }}
        component={SuccessfulMessageScreen}
      />
    </Stack.Navigator>
  );
}
