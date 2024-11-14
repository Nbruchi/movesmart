import { View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const AddButton = ({ iconSize }: { iconSize: string }) => {
  return (
    <View
      className={`bg-white rounded-xl items-center justify-center m-2 ${
        iconSize === "large" ? "w-72 h-52" : "h-24 w-40"
      }`}
    >
      <AntDesign
        name="plus"
        color="#04293A"
        size={iconSize === "large" ? 80 : 40}
      />
    </View>
  );
};

export default AddButton;
