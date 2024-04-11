const {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} = require("react-native");
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useEffect, useState } from "react";
import { log } from "react-native-reanimated";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginPage({ props }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    console.log(email, password);
    const userData = {
      email: email,
      password,
    };

    axios.post("http://192.168.1.72:3001/login", userData).then((res) => {
      console.log(res.data);
      if (res.data.status == "ok") {
        Alert.alert("Logged In Successfully!");
        AsyncStorage.setItem("token", res.data.data);
        AsyncStorage.setItem("isLoggedIn", JSON.stringify(true));
        AsyncStorage.setItem("userType", res.data.userType);
        // navigation.navigate('Home');
        if (res.data.userType == "Admin") {
          navigation.navigate("AdminScreen");
        } else {
          navigation.navigate("HomeScreen");
        }
      }
    });
  }
  async function getData() {
    const data = await AsyncStorage.getItem("isLoggedIn");

    console.log(data, "at app.jsx");
  }
  useEffect(() => {
    getData();
    console.log("Hii");
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps={"always"}
    >
      <View style={{ backgroundColor: "white" }}>
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
              color="#420475"
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
            <FontAwesome name="lock" color="#420475" style={styles.smallIcon} />
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              onChange={(e) => setPassword(e.nativeEvent.text)}
            />
          </View>
        </View>

        {/* login button */}
        <View style={styles.button}>
          <TouchableOpacity style={styles.inBut} onPress={() => handleSubmit()}>
            <View>
              <Text style={styles.textSign}>Log in</Text>
            </View>
          </TouchableOpacity>

          <View style={{ padding: 15 }}>
            <Text
              style={{ fontSize: 14, fontWeight: "bold", color: "#919191" }}
            >
              ----Create account?----
            </Text>
          </View>
          <View style={styles.bottomButton}>
            {/* register button */}
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={styles.inBut2}
                onPress={() => {
                  navigation.navigate("Register");
                }}
              >
                <FontAwesome
                  name="user-plus"
                  color="white"
                  style={[styles.smallIcon2, { fontSize: 30 }]}
                />
              </TouchableOpacity>
              <Text style={styles.bottomText}>Sign Up</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default LoginPage;
