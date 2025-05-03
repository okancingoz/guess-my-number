import { View, Text, Image } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

interface GameOverProps {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
}

const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}: GameOverProps) => {
  return (
    <View className="items-center justify-center flex-1">
      <Title>GAME OVER!</Title>
      <View className="rounded-full w-64 h-64 overflow-hidden mt-6 border-accentLight border-4">
        <Image
          className="w-full h-full"
          resizeMode="cover"
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text className="font-tetris text-2xl text-accentLight mt-4 p-8 text-center">
        Your phone needed{" "}
        <Text className="text-accent500"> {roundsNumber} </Text> rounds to guess
        the number
        <Text className="text-accent500"> {userNumber} </Text>.
      </Text>

      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;
