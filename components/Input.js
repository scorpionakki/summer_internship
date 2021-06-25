import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Colors from '../constants/colors';
const Input = props => {
    return(
        <TextInput style={{...styles.input, ...props.style}} {...props}/>
    )
};

const styles = StyleSheet.create({
    input:{
        height: 30,
        borderBottomColor: '#222831',
        borderBottomWidth: 1,
        marginVertical: 10,
        color: Colors.primary,
        textAlign: 'center',
    }
});

export default Input;