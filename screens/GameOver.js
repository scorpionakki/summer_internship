import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';
const GameOver = props => {
    return(
        <View style={styles.screen}>
            <Card style={styles.card}>
                <Text style={styles.gameOverText}>Game Over in {props.noOfRounds} rounds</Text>
                <View style={styles.button}>
                    <Button title="Play Again" color="#222831" onPress={props.restart}/>
                </View>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gameOverText:{
        color: colors.primary,
    },
    card:{
        height: 200,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button:{
        width: '90%',
    }
});

export default GameOver;