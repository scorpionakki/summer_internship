import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GameOver = props => {
    return(
        <View>
            <Text>Game Over in {props.noOfRounds} rounds</Text>
            <Button title="Play Again" onPress={() => props.restart}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default GameOver;