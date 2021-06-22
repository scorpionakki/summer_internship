import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    // Instead of key you can go with any variable just FlatList will look for "key" if not found will throw an error so specify what to look for instead of "key" by using keyExtractor={(item, index) => item.__yourSpecifiedVar__}
    // setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}]);
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onCancel={cancelGoalAdditionHandler} onAddGoal={addGoalHandler} />

      {/* Now you can use ScrollView instead of FlatList but if a list is having a good amount of data then scrollView would take a hit in terms of performance as it will load up the whole list instead of just the items that are up there on the screen, always use FlatList if you aren't sure the amount of data */}
      <FlatList
        style={styles.list}
        data={courseGoals}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} id={itemData.item.id} onDelete={removeGoalHandler}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: 'black',
    flex:1 
  },
  list: {
    marginTop: 50,
  }
});