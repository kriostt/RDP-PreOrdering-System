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
import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginPage() {
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
        // AsyncStorage.setItem("token", res.data.data);
        // AsyncStorage.setItem("isLoggedIn", JSON.stringify(true));
        // AsyncStorage.setItem("userType", res.data.userType);
        // navigation.navigate('Home');
        if (res.data.userType == "Admin") {
          navigation.navigate("Admin");
        } else {
          navigation.navigate("Home");
        }
      }
    });
  }
  // async function getData() {
  //   const data = await AsyncStorage.getItem("isLoggedIn");

  //   console.log(data, "at app.jsx");
  // }
  // useEffect(() => {
  //   getData();
  //   console.log("Hii");
  // }, []);

  return (
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
            <FontAwesome name="lock" color="#003366" style={styles.smallIcon} />
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
  );
}
export default LoginPage;
