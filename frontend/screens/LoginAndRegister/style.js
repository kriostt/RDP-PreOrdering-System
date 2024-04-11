import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  smallIcon: {
    marginRight: 10,
    fontSize: 24,
    alignSelf: 'center',
    paddingBottom: 12 
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 260,
    width: 260,
    marginTop: 30,
  },
  text_footer: {
    color: "#003366",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 3,
    marginTop: 15,

    paddingHorizontal: 15,

    borderWidth: 1,
    borderColor: "#003366",
    borderRadius: 50,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginTop: -12,

    color: "#003366",
    marginLeft: 10,
    paddingVertical: 14,
  },
  loginContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: "100%", 
    alignItems: "center",
  },
  header: {
    justifyContent: "flex-end",
    paddingHorizontal: 20,
  },
  text_header: {
    color: "#003366",
    fontWeight: "bold",
    fontSize: 30,
  },
  button: {
    alignItems: "center",
    marginTop: -20,
    alignItems: "center",
    textAlign: "center",
    margin: 20,
  },
  inBut: {
    width: "70%",
    backgroundColor: "#003366",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 50,
  },
  inBut2: {
    backgroundColor: "#003366",
    height: 65,
    width: 65,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomButton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallIcon2: {
    fontSize: 40,
    // marginRight: 10,
  },
  bottomText: {
    color: "black",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 5,
  },
  radioButton_div: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  radioButton_inner_div: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton_title: {
    fontSize: 18,
    color: "#003366",
  },
  radioButton_text: {
    fontSize: 16,
    color: "black",
    marginLeft: 60,
  },
});
export default styles;
