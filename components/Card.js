import React from 'react';
import {View, StyleSheet} from 'react-native';
const Card = props => {
    return(
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
    card:{
        padding: 10,
        paddingTop: 20,
        marginTop: 20,
        width: '80%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#393e46',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#00fff5',
      },
});

export default Card;