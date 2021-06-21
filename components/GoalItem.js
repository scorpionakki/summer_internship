import React from "react";
import { StyleSheet, View, Text } from "react-native";

const GoalItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#a95aec",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 3,
  },
});

export default GoalItem;