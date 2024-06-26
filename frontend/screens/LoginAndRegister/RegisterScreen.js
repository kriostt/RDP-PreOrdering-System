const {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
} = require("react-native");
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import Error from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";
import axios from "axios";
import { RadioButton } from "react-native-paper";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [usernameVerify, setUsernameVerify] = useState(false);
  const [email, setEmail] = useState("");
  const [emailVerify, setEmailVerify] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneVerify, setPhoneVerify] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  function handleSubmit() {
    const userData = {
      username: username,
      email,
      phone,
      password,
    };

    if (usernameVerify && emailVerify && passwordVerify && phoneVerify) {
      axios
        .post("http://10.255.82.232:3001/register", userData)
        .then((res) => {
          console.log(res.data);
          if (res.data.status == "ok") {
            Alert.alert("Registered Successfully!!");
            navigation.navigate("Login");
          } else {
            Alert.alert(JSON.stringify(res.data));
          }
        })
        .catch((e) => console.log(e));
    } else {
      Alert.alert("Please fill in the form.");
    }
  }

  function handleUsername(e) {
    const usernameVar = e.nativeEvent.text;
    setUsername(usernameVar);
    setUsernameVerify(false);

    if (usernameVar.length > 1) {
      setUsernameVerify(true);
    }
  }

  function handleEmail(e) {
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    setEmailVerify(false);
    if (/^[\w.%+-]+@rdpolytech\.ca$/.test(emailVar)) {
      setEmail(emailVar);
      setEmailVerify(true);
    }
  }

  function handlePhone(e) {
    const phoneVar = e.nativeEvent.text;
    setPhone(phoneVar);
    setPhoneVerify(false);
    if (/^\d{10}$/.test(phoneVar)) {
      setPhone(phoneVar);
      setPhoneVerify(true);
    }
  }

  function handlePassword(e) {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(false);
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
      setPassword(passwordVar);
      setPasswordVerify(true);
    }
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"always"}
        style={{ backgroundColor: "white" }}
      >
        <View style={styles.mainContainer}>
          {/* register screen image */}
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../assets/images/login.jpg")}
            />
          </View>

          <View style={styles.loginContainer}>
            {/* title */}
            <Text style={styles.text_header}>Register</Text>

            {/* username input */}
            <View style={styles.action}>
              <FontAwesome
                name="user-o"
                color="#003366"
                style={styles.smallIcon}
              />
              <TextInput
                placeholder="Username"
                style={styles.textInput}
                onChange={(e) => handleUsername(e)}
              />
              {username.length < 1 ? null : usernameVerify ? (
                <Feather name="check-circle" color="green" size={20} />
              ) : (
                <Error name="error" color="red" size={20} />
              )}
            </View>
            {username.length < 1 ? null : usernameVerify ? null : (
              <Text
                style={{
                  marginLeft: 20,
                  color: "red",
                }}
              >
                Please enter a username with more than 1 character.
              </Text>
            )}

            {/* email input  */}
            <View style={styles.action}>
              <Fontisto
                name="email"
                color="#003366"
                size={24}
                style={{ marginLeft: 0, paddingRight: 5, paddingBottom: 12 }}
              />
              <TextInput
                placeholder="Email"
                style={styles.textInput}
                onChange={(e) => handleEmail(e)}
              />
              {email.length < 1 ? null : emailVerify ? (
                <Feather name="check-circle" color="green" size={20} />
              ) : (
                <Error name="error" color="red" size={20} />
              )}
            </View>
            {email.length < 1 ? null : emailVerify ? null : (
              <Text
                style={{
                  marginLeft: 20,
                  color: "red",
                }}
              >
                Please enter a valid RDP email address.
              </Text>
            )}

            {/* phone input */}
            <View style={styles.action}>
              <FontAwesome
                name="phone"
                color="#003366"
                size={24}
                style={{ paddingRight: 10 }}
              />
              <TextInput
                placeholder="Phone"
                style={styles.textInput}
                onChange={(e) => handlePhone(e)}
                maxLength={10}
              />
              {phone.length < 1 ? null : phoneVerify ? (
                <Feather name="check-circle" color="green" size={20} />
              ) : (
                <Error name="error" color="red" size={20} />
              )}
            </View>
            {phone.length < 1 ? null : phoneVerify ? null : (
              <Text
                style={{
                  marginLeft: 20,
                  color: "red",
                }}
              >
                Please enter a valid phone number.
              </Text>
            )}

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
                onChange={(e) => handlePassword(e)}
                secureTextEntry={showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {password.length < 1 ? null : !showPassword ? (
                  <Feather
                    name="eye"
                    style={{
                      marginRight: -10,
                      paddingBottom: 12,
                      paddingRight: 5,
                    }}
                    color={passwordVerify ? "green" : "red"}
                    size={23}
                  />
                ) : (
                  <Feather
                    name="eye-off"
                    style={{
                      marginRight: -10,
                      paddingBottom: 12,
                      paddingRight: 5,
                    }}
                    color={passwordVerify ? "green" : "red"}
                    size={23}
                  />
                )}
              </TouchableOpacity>
            </View>
            {password.length < 1 ? null : passwordVerify ? null : (
              <Text
                style={{
                  marginLeft: 20,
                  color: "red",
                }}
              >
                Password must have an uppercase letter, a lowercase letter, a
                number, and 6 or more characters.
              </Text>
            )}
          </View>

          {/* register button */}
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.inBut}
              onPress={() => handleSubmit()}
            >
              <View>
                <Text style={styles.textSign}>Register</Text>
              </View>
            </TouchableOpacity>

            {/* link to navigate to login page */}
            <View style={{ padding: 15 }}>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#007bff" }}
                >
                  Have an existing account?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default RegisterPage;
