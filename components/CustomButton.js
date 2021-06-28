import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = props => {
    return(
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button:{
        elevation: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: 'black',
    },
    buttonText:{
        alignSelf: 'center',
        textTransform: 'uppercase',
        color: '#00fff5'
    },
});

export default CustomButton;