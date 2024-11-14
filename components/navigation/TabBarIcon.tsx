import { ImageSourcePropType } from "react-native";
import { Image, View, Text } from "react-native";

interface TabBarIconProps {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
}

const TabBarIcon = ({ icon, color, name, focused }: TabBarIconProps) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        className="w-6 h-6"
        resizeMode="contain"
        tintColor={color}
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabBarIcon;
