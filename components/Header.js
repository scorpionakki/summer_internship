import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>REIG</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        backgroundColor: '#222831',
    },
    headerText:{
        color: '#00fff5',
        fontSize: 20,
    }
});

export default Header;