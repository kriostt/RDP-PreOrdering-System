// import necessary modules
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Categories from "../components/categories";
import FeaturedRow from "../components/featuredRow";
import FeaturedItems from "../components/featuredItems";
import { getFeaturedCategories, getFeaturedItems } from "../api";

export default function HomeScreen() {
  // state variables
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const [featuredItems, setFeaturedItems] = useState([]);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // React Navigation hook
  const navigation = useNavigation();

  // effect to fetch featured categories data
  useEffect(() => {
    getFeaturedCategories().then((data) => {
      setFeaturedCategories(data);
    });
  }, []);

  // effect to fetch featured items data
  useEffect(() => {
    getFeaturedItems().then((data) => {
      setFeaturedItems(data);
    });
  });

  // function to navigate to Cart screen
  const viewCart = () => {
    navigation.navigate("Cart");
  };

  // toggle the modal
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  // navigate to the login screen
  const navigateToLogin = () => {
    navigation.navigate("Login");
    toggleProfileMenu();
  };

  // navigate to the register screen
  const navigateToRegister = () => {
    navigation.navigate("Register");
    toggleProfileMenu();
  };

  return (
    // SafeAreaView to handle notches and screen insets
    <SafeAreaView className="bg-white">
      {/* StatusBar */}
      <StatusBar barStyle="dark-content" />

      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Search" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">Red Deer, AB</Text>
          </View>
        </View>

        {/* cart icon */}
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <TouchableOpacity onPress={viewCart}>
            <Icon.ShoppingCart
              height="20"
              width="20"
              strokeWidth={2.5}
              stroke="white"
            />
          </TouchableOpacity>
        </View>

        {/* profile icon */}
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <TouchableOpacity onPress={toggleProfileMenu}>
            <Icon.User
              height="20"
              width="20"
              strokeWidth={2.5}
              stroke="white"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* profile modal */}
      <Modal
        visible={isProfileMenuOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleProfileMenu}
      >
        <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          {/* background overlay */}
          <TouchableOpacity
            style={{ flex: 1 }}
            activeOpacity={1}
            onPress={toggleProfileMenu}
          />

          {/* profile menu */}
          <View
            style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}
          >
            {/* close button */}
            <TouchableOpacity onPress={toggleProfileMenu}>
              <Text
                style={{
                  textAlign: "right",
                  marginBottom: 20,
                  color: "blue",
                  fontSize: 24,
                }}
              >
                Close
              </Text>
            </TouchableOpacity>

            {/* menu items */}
            <TouchableOpacity onPress={navigateToLogin}>
              <Text style={{ marginBottom: 20, fontSize: 22 }}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToRegister}>
              <Text style={{ marginBottom: 20, fontSize: 22 }}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* categories */}
        <Categories />

        {/* featured row */}
        <View className="mt-5">
          {featuredCategories.map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                name={item.name}
                categories={item.categories}
              />
            );
          })}
        </View>

        {/* featured items */}
        <View className="mt-5">
          {featuredItems.map((item, index) => {
            return (
              <FeaturedItems
                key={index}
                name={item.name}
                dishes={item.dishes}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
