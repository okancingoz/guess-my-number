import { View, Dimensions } from "react-native";

interface CardProps {
  children: React.ReactNode;
}

const deviceWidth = Dimensions.get("window").width;

const Card = ({ children }: CardProps) => {
  return (
    <View
      style={{
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        marginTop: deviceWidth < 380 ? 18 : 36,
      }}
      className="bg-primary950 mx-6 p-6 rounded-2xl elevation-lg shadow-lg"
    >
      {children}
    </View>
  );
};

export default Card;
