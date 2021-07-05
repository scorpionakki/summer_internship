import React, {useState, useRef, useEffect} from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import Card from '../components/Card';
import Colors from "../constants/colors";

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude)
        return generateRandomBetween(min, max, exclude);
    else
        return rndNum;
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if(currentGuess === props.userChoice)
        {
            props.onGameOver(rounds);
        }
    }, [currentGuess, props.userChoice, props.onGameOver]);

    const nextGuessHandler = direction => {
        if((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice))
        {
            Alert.alert("No Cheating", "Please don\'t cheat", [
                { text: "OK", style: "cancel"}
              ]);
            return;
        }
        if(direction === 'lower')
        {
            currentHigh.current = currentGuess;
        }
        else
        {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setRounds(curRounds => curRounds + 1);   
        setCurrentGuess(nextNumber); 
    };
    return(
        <View style={styles.screen}>
            <Card style={styles.card}>
                <Text style={styles.cardText}>You provided: {props.userChoice}</Text>
                <Text style={styles.cardText}>Opponent's Guess {currentGuess}</Text>
                <View style={styles.buttons}>
                    <View style={styles.button}><Button title="Lower" color="#222831" onPress={() => nextGuessHandler('lower')}/></View>
                    <View style={styles.button}><Button title="Greater" color="#222831" onPress={() => nextGuessHandler('greater')}/></View>
                </View>
                
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:{
        height: 200,
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText:{
        color: Colors.primary,
    },
    buttons:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    button:{
        width: '40%',
    },
});

export default GameScreen;