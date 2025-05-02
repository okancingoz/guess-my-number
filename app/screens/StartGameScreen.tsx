import { TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

interface StartGameScreenProps {
  onPickNumber: (pickNumber: number) => void;
}

const StartGameScreen = ({ onPickNumber }: StartGameScreenProps) => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 90",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };

  return (
    <View className="mt-24">
      <View className="items-center">
        <Title>Guess My Number</Title>
      </View>

      <Card>
        <InstructionText>Enter a number</InstructionText>
        <View className="justify-center flex-row p-4">
          <TextInput
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            className="w-16 text-3xl text-accent500 border-b-2 border-b-accent500 my-2 font-tetris text-center"
            onChangeText={numberInputHandler}
            value={enteredNumber}
          />
        </View>
        <View className="flex-row justify-center items-center">
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;
