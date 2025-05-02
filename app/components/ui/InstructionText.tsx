import { Text } from "react-native";
interface InstructionTextProps {
  children: string;
}

const InstructionText = ({ children }: InstructionTextProps) => {
  return (
    <Text className="text-center text-accent500 text-xl m-2">{children}</Text>
  );
};

export default InstructionText;
