import { Text } from "react-native";

interface TitleProps {
  children: string;
}

const Title = ({ children }: TitleProps) => {
  return (
    <Text className="text-accentLight border-b-accentLight font-bold text-3xl text-center border-2 p-3 rounded-xl">
      {children}
    </Text>
  );
};

export default Title;
