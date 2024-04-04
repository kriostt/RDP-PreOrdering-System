import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import ItemScreen from "./screens/ItemScreen";
import CartScreen from "./screens/CartScreen";
import SuccessfulMessageScreen from "./screens/SuccessfulMessageScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
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
    </NavigationContainer>
  );
}
