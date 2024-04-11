// import necessary modules
import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./store";
import Navigation from "./navigation";

export default function App() {
  // main component of the application
  return (
    // wrap the Navigation component with the Redux Provider and pass the Redux store
    <Provider store={store}>
      <NavigationContainer>
        {/* render the Navigation component */}
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
