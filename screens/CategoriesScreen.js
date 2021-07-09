import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoriesScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The categories screen</Text>
            <Button title="Go to Meals!" onPress={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals'
                });
                //replace is used when you want to completely replace a screen and start a new stack maybe. eg: Login screen you came from sign up to login now or from login to the homescreen and user should not be able to go back therefore you need to start a new stack and in order to do that use replace.
                //props.navigation.replace('CategoryMeals');
            }}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoriesScreen;