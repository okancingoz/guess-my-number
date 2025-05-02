import { View, Text } from "react-native";

interface NumberContainerProps {
  children: number;
}

const NumberContainer = ({ children }: NumberContainerProps) => {
  return (
    <View className="border-4 border-accent500 mt-8 p-4 rounded-lg align-middle justify-center ">
      <Text className="text-accent500 font-tetris text-center text-4xl">
        {children}
      </Text>
    </View>
  );
};

export default NumberContainer;
