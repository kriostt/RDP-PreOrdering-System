// import necessary modules
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
// import screens
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import ItemScreen from "./screens/ItemScreen";
import CartScreen from "./screens/CartScreen";
import SuccessfulMessageScreen from "./screens/SuccessfulMessageScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import { AuthProvider } from "./contexts/AuthContext";

// create a stack navigator
const Stack = createNativeStackNavigator();

// function for rendering navigation stack
export default function Navigation() {
  return (
    <AuthProvider>
      {/* navigation container */}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* ---Stack screens--- */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
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
          <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
