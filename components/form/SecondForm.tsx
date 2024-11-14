import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { profile } from "@/constants/images";
import { initialValues } from "@/constants/data";

interface SecondFormProps {
  onSubmit: (values: typeof initialValues) => void; // Add onSubmit prop
}

const SecondForm: React.FC<SecondFormProps> = ({ onSubmit }) => {
  const handleSubmit = () => {
    onSubmit(initialValues);
  };
  return (
    <View className="bg-app-form py-4 w-full rounded-xl px-10 justify-center items-center">
      <View className="flex-col gap-y-4">
        <View className="items-center justify-center p-2 bg-gray-300 self-center rounded-full">
          <Image
            source={profile}
            alt="profile"
            resizeMode="contain"
            className="w-20 h-20"
          />
        </View>
        <Link
          href="/sign-up/picture/upload"
          className="flex-row gap-x-2 items-center justify-center"
        >
          <AntDesign name="right" size={20} color="#E59D39" />
          <Text className="text-white text-xl">Upload a picture</Text>
        </Link>
        <Link
          href="/sign-up/picture/new"
          className="flex-row gap-x-2 items-center justify-center"
        >
          <AntDesign name="right" size={20} color="#E59D39" />
          <Text className="text-white text-xl">Take a picture</Text>
        </Link>
      </View>
      <View>
        <Text className="text-2xl text-white">Create account for:</Text>
        {["Personal account", "Station Admin account"].map((item, index) => (
          <View key={index} className="flex-row items-center gap-2">
            <AntDesign name="checkcircle" size={20} color="#69B6F4" />
            <Text className="text-white text-lg">{item}</Text>
          </View>
        ))}
      </View>
      {/* Add submit button */}
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondForm;
