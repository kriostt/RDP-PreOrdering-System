import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Categories from "../components/categories";
import FeaturedRow from "../components/featuredRow";
import { getFeaturedCategories, getFeaturedItems } from "../api";
import FeaturedItems from "../components/featuredItems";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const [featuredItems, setFeaturedItems] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getFeaturedCategories().then((data) => {
      setFeaturedCategories(data);
    });
  }, []);

  useEffect(() => {
    getFeaturedItems().then((data) => {
      setFeaturedItems(data);
    });
  });

  const viewCart = () => {
    navigation.navigate("Cart");
  };

  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Search menu items" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">Red Deer, AB</Text>
          </View>
        </View>
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
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* categories */}
        <Categories />

        {/* featured */}
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
