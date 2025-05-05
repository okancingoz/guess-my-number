import { View, Text, Dimensions } from "react-native";

interface NumberContainerProps {
  children: number;
}

const deviceWidth = Dimensions.get("window").width;

const NumberContainer = ({ children }: NumberContainerProps) => {
  return (
    <View
      style={{
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
      }}
      className="border-4 border-accent500 rounded-lg align-middle justify-center "
    >
      <Text
        style={{
          fontSize: deviceWidth < 380 ? 28 : 36,
        }}
        className="text-accent500 font-tetris text-center"
      >
        {children}
      </Text>
    </View>
  );
};

export default NumberContainer;
