import { Text, View } from "react-native";

interface GuessLogItemProps {
  roundNumber: number;
  guess: number;
}

const GuessLogItem = ({ roundNumber, guess }: GuessLogItemProps) => {
  return (
    <View className=" border-primary900 border-1 rounded-xl p-6 my-3 bg-accent500 flex-row justify-between w-full elevation-xl shadow-black shadow-xl">
      <Text className="font-tetris">#{roundNumber}</Text>
      <Text className="font-tetris">Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;
