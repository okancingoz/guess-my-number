import { View, Text } from "react-native";

interface NumberContainerProps {
  children: number;
}

const NumberContainer = ({ children }: NumberContainerProps) => {
  return (
    <View className="border-4 border-accent500 m-8 p-8 rounded-lg align-middle justify-center">
      <Text className="text-accent500 font-bold text-center text-4xl">
        {children}
      </Text>
    </View>
  );
};

export default NumberContainer;
