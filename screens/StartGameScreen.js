import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmState] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmState(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 99", [
        { text: "OK", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    setConfirmState(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <View style={styles.chosenNumberView}>
        <Text style={styles.chosenNumberText}>
          Chosen Number: {selectedNumber}
        </Text>
        <Button color="#222831" title="Start Game" onPress={() => props.onStartGame(selectedNumber)}/>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.guessTitleText}>Guess a number</Text>
        <Card style={styles.card}>
          <Input
            placeholder="Number"
            placeholderTextColor="#00adb5"
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttons}>
            <View style={styles.button}>
              <Button
                color="#222831"
                title="Reset"
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                color="#222831"
                title="Confirm"
                onPress={confirmInputHandler}
              />
            </View>
          </View>
          {confirmedOutput}
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  guessTitleText: {
    color: Colors.primary,
    fontSize: 24,
    fontWeight: "100",
  },
  card: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: "40%",
  },
  chosenNumberText: {
    color: Colors.primary,
  },
  chosenNumberView:{
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default StartGameScreen;
