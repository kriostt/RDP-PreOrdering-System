import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

// Creating authentication context
const AuthContext = createContext();

// Authentication provider component
export const AuthProvider = ({ children }) => {
  // State variables for token, user data, and authentication status
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Effect to initialize authentication state from SecureStore
  useEffect(() => {
    SecureStore.getItemAsync("user_data")
      .then((data) => {
        if (data) {
          const { userToken, user } = JSON.parse(data);
          setToken(userToken);
          setUserData(user);
          setIsAuthenticated(true);
        }
      })
      .catch((error) => console.error("Error retrieving user data:", error));
  }, []);

  // Function to handle user login
  const login = (newToken, newData) => {
    SecureStore.setItemAsync(
      "user_data",
      JSON.stringify({ userToken: newToken, user: newData })
    )
      .then(() => {
        setToken(newToken);
        setUserData(newData);
        setIsAuthenticated(true);
      })
      .catch((error) => console.error("Error storing user data:", error));
  };

  // Function to handle user logout
  const logout = () => {
    SecureStore.deleteItemAsync("user_data")
      .then(() => {
        setToken(null);
        setUserData(null);
        setIsAuthenticated(false);
      })
      .catch((error) => console.error("Error removing user data:", error));
  };

  // Providing authentication context value to children components
  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated, login, logout, userData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access authentication context
export const useAuth = () => useContext(AuthContext);
