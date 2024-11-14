import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { logo, banner } from "../constants/images";
import { Link, router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const HomePage = () => {
  return (
    <SafeAreaView className="h-full bg-app-bg px-10">
      <ScrollView>
        <View className="w-full items-center justify-center min-h-screen flex-col">
          <Image source={logo} resizeMode="contain" />
          <View className="items-center justify-center relative">
            <ImageBackground
              source={banner}
              resizeMode="contain"
              className="w-[500px] h-[400px] -z-20"
            />
          </View>
          <Text className="text-white text-5xl text-center uppercase">
            Welcome to
          </Text>
          <Text className="block text-center text-white text-3xl mb-8">
            Move<Text className="text-secondary">Smart</Text>
          </Text>
          <View className="gap-4 items-center flex-row justify-center">
            <View className="flex-1 gap-2">
              <Text className="text-white text-xl text-center">
                Easily book tickets and cars for efficient journey with
                MoveSmart
              </Text>
              {/* <TouchableOpacity
                className="px-4 py-2 bg-app-btn rounded-xl items-center justify-center"
                onPress={() => router.push("/sign-in?type=personal")}
              >
                <Text className="text-lg text-white">
                  Get Started (Personal)
                </Text>
              </TouchableOpacity> */}
              <TouchableOpacity
                className="px-4 py-2 bg-app-btn rounded-xl items-center justify-center"
                onPress={() => router.push("/home")}
              >
                <Text className="text-lg text-white">
                  Get Started (Personal)
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-1 border border-white rounded-xl p-6 h-68 items-start justify-center gap-4">
              {["Personal account", "Station Admin"].map((item, index) => (
                <View
                  className="w-4/5 flex-row items-center justify-between cursor-pointer"
                  key={index}
                >
                  <Link
                    href={`/sign-in?type=${item
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    className="text-xl text-white"
                  >
                    {item}
                  </Link>
                  <AntDesign
                    name="doubleright"
                    size={20}
                    color="#E59D39"
                    className=""
                  />
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#04293A" style="light" />
    </SafeAreaView>
  );
};

export default HomePage;
