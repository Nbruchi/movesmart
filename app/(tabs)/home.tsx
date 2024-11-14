import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/ui/Header";
import FirstScreen from "@/components/ui/FirstScreen";
import SecondScreen from "@/components/ui/SecondScreen";

const HomeScreen = () => {
  const [toggleScreen, setToggleScreen] = useState(0);

  const handleScreenToggle = (screen: number) => {
    setToggleScreen(screen);
  };

  return (
    <SafeAreaView className="h-full px-10 bg-app-bg">
      <ScrollView>
        <Header />
        <View className="flex-row w-full items-center justify-center gap-0 mt-12 relative">
          <TouchableOpacity
            className="bg-component p-4 w-2/5 flex items-center justify-center rounded-xl rounded-r-none"
            onPress={() => handleScreenToggle(0)}
          >
            <Text className="text-white">Booking</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-white p-4 w-2/5 flex items-center justify-center rounded-xl rounded-l-none"
            onPress={() => handleScreenToggle(1)}
          >
            <Text className="text-component">Car rental</Text>
          </TouchableOpacity>
        </View>
        <View className="my-10 w-full h-full">
          {toggleScreen == 0 && <FirstScreen />}
          {toggleScreen == 1 && <SecondScreen />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
