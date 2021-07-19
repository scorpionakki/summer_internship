import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View style={styles.mealItemContent}>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <Text>{props.duration}mins</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    mealItem:{
        height: 200,
        width: '100%',
        backgroundColor: '#d6d6d6',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
    },
    mealRow:{
        flexDirection: 'row',
    },
    mealHeader:{
        height: '85%',
    },
    mealDetail:{
        height: '15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bgImage:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    title:{
        fontFamily: 'open-sans',
        fontSize: 18,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.7)',
        textAlign: 'center',
        paddingVertical: 5,
    }
});

export default MealItem;