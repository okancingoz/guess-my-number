import { TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";

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
    <View
      style={{
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      }}
      className="bg-primary950 mx-6 mt-24 p-4 rounded-2xl elevation-lg shadow-lg"
    >
      <View className="justify-center flex-row p-4">
        <TextInput
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          className="h-max w-16 text-3xl text-accent500 border-b-2 border-b-accent500 my-2 font-bold text-center"
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
      </View>

      <View className="flex-row justify-center">
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;
