import { Text } from "react-native";

interface TitleProps {
  children: string;
}

const Title = ({ children }: TitleProps) => {
  return (
    <Text
      className="font-tetris text-accentLight border-b-accentLight text-3xl text-center border-2 p-3 rounded-xl max-w-[80%]"
    >
      {children}
    </Text>
  );
};

export default Title;
