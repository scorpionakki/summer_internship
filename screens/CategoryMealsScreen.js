import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const catTitle = props.navigation.getParam('categoryTitle');
    return(
        <View style={styles.screen}>
            <Text>The category meals screen</Text>
            <Button title="Go to Meal Detail" onPress={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail'
                })
            }} />
            <Button title="Go back to Categories" onPress={() => {
                //goBack or pop both can be used with stack however when you switch from StackNavigator to any other pop won't work, goBack only would work hence proceeding with goBack
                props.navigation.goBack();
            }} />
        </View>
    )
};

CategoryMealsScreen.navigationOptions = navigationData => {
   const title = navigationData.navigation.getParam('categoryTitle');
   return{
       headerTitle: title,
   }
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryMealsScreen;