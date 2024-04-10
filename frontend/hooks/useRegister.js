import { useState } from "react";
import { message } from "antd";
import { useAuth } from "../contexts/AuthContext.js";

// Custom hook for register functionality
const useRegister = () => {
  // Using authentication context
  const { login } = useAuth();

  // State variables for error and loading status
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to handle user registration
  const registerUser = async (values) => {
    // Checking if passwords match
    if (values.password !== values.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setError(null);
      setLoading(true);
      // Sending registration request to server
      const res = await fetch(`http://localhost:3001/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // Parsing response data
      const data = await res.json();

      // Handling response status
      if (res.status === 201) {
        message.success(data.message);
        login(data.token, data.user); // Logging in user
      } else if (res.status === 400) {
        setError(data.message); // Setting error message for bad request
      } else if (res.status === 500) {
        setError(data.message); // Setting error message for internal server error
      } else {
        message.error("Failed to register");
      }
    } catch (error) {
      message.error("Failed to register");
    } finally {
      setLoading(false);
    }
  };

  // Returning loading status, error message, and register function
  return { loading, error, registerUser };
};

export default useRegister;
