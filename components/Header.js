import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import Colors from '../constants/colors';

const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 60,
        paddingTop: 6,
        backgroundColor: Colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle:{
        color: Colors.primary,
        fontSize: 18,

    },
});

export default Header;