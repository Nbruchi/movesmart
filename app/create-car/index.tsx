import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/ui/Header";
import AddButton from "@/components/ui/AddButton";

const CreateCarScreen = () => {
  return (
    <SafeAreaView className="w-full h-full bg-app-bg">
      <ScrollView className="w-full px-4">
        <Header />
        <View className="w-full min-h-screen px-6">
          <Text className="my-6 text-start text-2xl text-white">
            Add a new car
          </Text>
          <View className="flex-row items-center justify-between my-6">
            <AddButton iconSize="large" />
            <View className="flex-col items-center">
              <AddButton iconSize="small" />
              <AddButton iconSize="small" />
            </View>
          </View>
          <Text className="my-6 text-start text-2xl text-white">
            Specifications
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateCarScreen;
