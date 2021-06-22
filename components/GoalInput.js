import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  const cancelGoalHandler = () => {
    setEnteredGoal("");
    props.onCancel();
  };

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          placeholderTextColor="purple"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
          underlineColorAndroid='purple'
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={cancelGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'black',
  },
  input: {
    width: "80%",
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 15,
    color: 'white',
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
