import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
import AppLoading from "expo-app-loading";
import { useFonts} from "expo-font";


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  
  let [fontsLoaded] =  useFonts({
    'open-sans': require("./assets/fonts/OpenSans-Regular.ttf"),
  });
  

  if (!fontsLoaded) {
    //This AppLoading comes in handy when you want to load something before the app starts in our case its the font. startAsync is a handler provided by expo itself so the value has to be a function and which returns a promise.
    return (
      <AppLoading />
    );
  }
  const playAgainHandler = () => {
    setGuessRounds(0);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
    setUserNumber();
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = <GameOver noOfRounds={guessRounds} restart={playAgainHandler} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Number Game" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#222831",
  },
});
