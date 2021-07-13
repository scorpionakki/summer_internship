import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";



const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
          <TouchableOpacity style={styles.gridItem} onPress={() =>{
              props.navigation.navigate({routeName: 'CategoryMeals', params:{
                  categoryId: itemData.item.id,
                  categoryTitle: itemData.item.title,
              }});
          }}>
            <View >
              <Text>{itemData.item.title}</Text>
            </View>
          </TouchableOpacity>
        );
      };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
    // <View style={styles.screen}>
    //     <Text>The categories screen</Text>
    //     <Button title="Go to Meals!" onPress={() => {
    //         props.navigation.navigate({
    //             routeName: 'CategoryMeals'
    //         });
    //         //replace is used when you want to completely replace a screen and start a new stack maybe. eg: Login screen you came from sign up to login now or from login to the homescreen and user should not be able to go back therefore you need to start a new stack and in order to do that use replace.
    //         //props.navigation.replace('CategoryMeals');
    //     }}/>
    // </View>
  );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
