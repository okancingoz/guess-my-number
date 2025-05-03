import { View, Text, Image } from "react-native";
import Title from "../components/ui/Title";

const GameOverScreen = () => {
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
      <Text>Your phone needed X rounds to guess the number Y.</Text>
    </View>
  );
};

export default GameOverScreen;
