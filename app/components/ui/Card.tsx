import { View } from "react-native";

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <View
      style={{
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      }}
      className="bg-primary950 mx-6 mt-16 p-6 rounded-2xl elevation-lg shadow-lg"
    >
      {children}
    </View>
  );
};

export default Card;
