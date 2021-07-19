import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryGridTile = props => {
    return(
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
          <View style={{...styles.container, ...{backgroundColor: props.color}}}>
              <View style={styles.textRow}>
                <Text>{props.title}</Text>      
              </View>
          </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        height: 150,        
      },
    container:{
        flex:1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textRow:{
        backgroundColor: 'white',
        width: '100%',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryGridTile;