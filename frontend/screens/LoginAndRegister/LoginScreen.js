const {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Keyboard,
} = require("react-native");
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginPage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit() {
    console.log(email, password);
    const userData = {
      email: email,
      password,
    };

    axios.post("http://10.255.82.232:3001/login", userData).then((res) => {
      console.log(res.data);
      if (res.data.status == "ok") {
        Alert.alert("Logged In Successfully!");
        navigation.navigate("Home");
      }
    });

    Keyboard.dismiss();
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps={"always"}
      >
        <View style={styles.mainContainer}>
          {/* login screen image */}
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../assets/images/login.jpg")}
            />
          </View>

          <View style={styles.loginContainer}>
            {/* title  */}
            <Text style={styles.text_header}>Login</Text>

            {/* email input */}
            <View style={styles.action}>
              <FontAwesome
                name="user-o"
                color="#003366"
                style={styles.smallIcon}
              />
              <TextInput
                placeholder="Email"
                style={styles.textInput}
                onChange={(e) => setEmail(e.nativeEvent.text)}
              />
            </View>

            {/* password input */}
            <View style={styles.action}>
              <FontAwesome
                name="lock"
                color="#003366"
                style={styles.smallIcon}
              />
              <TextInput
                placeholder="Password"
                style={styles.textInput}
                onChange={(e) => setPassword(e.nativeEvent.text)}
                secureTextEntry={showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {password.length < 1 ? null : !showPassword ? (
                  <Feather
                    name="eye"
                    style={{ marginRight: -10, paddingBottom: 12 }}
                    color="#003366"
                    size={23}
                  />
                ) : (
                  <Feather
                    name="eye-off"
                    style={{ marginRight: -10, paddingBottom: 12 }}
                    color="#003366"
                    size={23}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* login button */}
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.inBut}
              onPress={() => handleSubmit()}
            >
              <View>
                <Text style={styles.textSign}>Log in</Text>
              </View>
            </TouchableOpacity>

            {/* link to navgigate to the register page */}
            <View style={{ padding: 15 }}>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#007bff" }}
                >
                  Don't have an account?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default LoginPage;
