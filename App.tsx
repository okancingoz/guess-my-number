import React, { useEffect } from "react";
import StartGameScreen from "./app/screens/StartGameScreen";
import GameScreen from "./app/screens/GameScreen";
import "./global.css";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import Colors from "./app/utils/constants/colors";
import GameOverScreen from "./app/screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import useBackgroundMusic from "./app/hooks/useBackground";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>();
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);
  const [guessRounds, setGuessRounds] = useState<number>(0);

  const [loaded, error] = useFonts({
    tetris: require("./app/assets/fonts/Tetris.ttf"),
  });

  useBackgroundMusic();

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = (numberOfRounds: number) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds)
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      className="flex-1"
      colors={[Colors.backgroundDark, Colors.backgroundMain]}
    >
      <ImageBackground
        source={require("./app/assets/images/background.jpg")}
        resizeMode="cover"
        imageStyle={{ opacity: 0.15 }}
        className="flex-1"
      >
        <SafeAreaView className="flex-1">{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
