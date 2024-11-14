import { View, Text } from "react-native";
import React from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

interface TravelCardProps {
  from: string;
  to: string;
}

const TravelCard = ({ from, to }: TravelCardProps) => {
  return (
    <View className="flex-row items-center justify-start gap-2 my-2">
      <FontAwesome name="location-arrow" size={20} color="#fff" className="" />
      <View className="flex-col items-start justify-start gap-2">
        <Text className="text-white text-xl">{from}</Text>
        <Text className="text-white text-md">{to}</Text>
      </View>
    </View>
  );
};

export default TravelCard;
