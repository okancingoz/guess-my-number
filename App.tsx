import React from "react";
import StartGameScreen from "./app/screens/StartGameScreen";
import GameScreen from "./app/screens/GameScreen";
import "./global.css";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import Colors from "./app/utils/constants/colors";
import GameOverScreen from "./app/screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
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
