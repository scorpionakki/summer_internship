import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";

const Registration = (props) => {
  return (
    <View style={styles.mainRegistrationScreen}>
      <Header />
      <View style={styles.registrationScreen}>
        <View style={styles.registration}>
          <View style={styles.registrationTxt}>
            <Text style={styles.registrationTxtAc}>Registration</Text>
          </View>
          <View style={styles.registrationTxtInput}>
            <MaterialCommunityIcons name="email" size={36} color="black" />
            <TextInput style={styles.emailTxtInput} />
          </View>
          <View style={styles.registrationTxtInput}>
            <MaterialCommunityIcons
              name="form-textbox-password"
              size={36}
              color="black"
            />
            <TextInput style={styles.emailTxtInput} />
          </View>
          <View style={styles.registrationTxtInput}>
            <MaterialCommunityIcons
              name="form-textbox-password"
              size={36}
              color="black"
            />
            <TextInput style={styles.emailTxtInput} />
          </View>
          <View style={styles.registrationBtn}>
            <CustomButton text="Registration" />
          </View>
        </View>
        
      </View>
      <View style={styles.screenSelect}>
          <CustomButton
            text="Registration"
            onPress={() => props.defaultScreen("Registration")}
          />
          <Text>|</Text>
          <CustomButton
            text="Login"
            onPress={() => props.defaultScreen("Login")}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainRegistrationScreen: {
    height: "100%",
  },
  registrationScreen: {
    height: "60%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#393e46",
    borderRadius: 15,
  },
  emailIcon: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  registration: {
    justifyContent: "space-between",
    height: 300,
    marginVertical: 80,
    width: "90%",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#222831",
  },
  registrationTxt: {
    flexDirection: "row",
    marginTop: -25,
    borderWidth: 1,
    borderColor: "#222831",
    backgroundColor: "black",
    borderRadius: 5,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    marginLeft: 50,
  },
  registrationTxtAc: {
    color: "#00fff5",
  },
  registrationTxtInput: {
    flexDirection: "row",
    width: "100%",
  },
  emailTxtInput: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: "85%",
    marginHorizontal: 10,
  },
  registrationBtn: {
    width: "80%",
    marginTop: 10,
    marginBottom: -27,
    marginLeft: 32,
  },
  screenSelect: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 40
  },
});

export default Registration;
