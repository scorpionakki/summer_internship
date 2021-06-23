import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "purple",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 3,
  },
  listItemText:{
    color: 'white',
  }
});

export default GoalItem;
