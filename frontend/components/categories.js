// import necessary modules
import { View, Text, ScrollView, TouchableOpacity} from "react-native";
import React, { useEffect, useState } from "react";
import { getCategories } from "../api";

export default function Categories() {
  // state variable to store categories from the API
  let [categories, setCategories] = useState([]);

  // effect hook to fetch categories when the component mounts
  useEffect(() => {
    getCategories().then((data) => {
      // update categories state with fetched data
      setCategories(data);
    });
  }, []);

  return (
    // container for list of categories below search bar
    <View className="mt-4">
      {/* display horizontal list of categories*/}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {/* map over categories array and render each category */}
        {categories.map((category, index) => {
          return (
            // view to contain each category item
            <View key={index} className="flex justify-center items-center mr-6">       
              {/* TouchableOpacity for category selection */}
              <TouchableOpacity className="p-3 rounded-full shadow bg-gray-200">
                <Text>{category.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
