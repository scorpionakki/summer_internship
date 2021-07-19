import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
    const renderMealItem = itemData => {
        return(
            <MealItem title={itemData.item.title} duration={itemData.item.duration} complexity={itemData.item.complexity}
            affordability={itemData.item.affordability} image={itemData.item.imageUrl} onSelectMeal={() => {
                props.navigation.navigate({routeName: 'MealDetail', params:{
                    mealId: itemData.item.id,
                }});
            }}/>
        );
    }

    const catId = props.navigation.getParam('categoryId');
    
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return(
        <View style={styles.screen}>
            <FlatList style={{width: '95%', margin:15,}} data={displayedMeals} keyExtractor={(item, index) => item.id} renderItem={renderMealItem}/>
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