import { View, Text } from "react-native";
import { TouchableRipple } from "react-native-paper";
import Colors from "../../utils/constants/colors";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

const PrimaryButton = ({ children, onPress }: PrimaryButtonProps) => {
  return (
    <View
      className="bg-primary900 m-1 shadow-sm p-2
    rounded-3xl overflow-hidden"
    >
      <TouchableRipple
        onPress={onPress}
        borderless={true} //for iOS
        rippleColor={Colors.rippleEffect}
        className="px-2 py-4 elevation-xl"
      >
        <Text className="font-tetris text-slate-50 text-center">
          {children}
        </Text>
      </TouchableRipple>
    </View>
  );
};

export default PrimaryButton;
