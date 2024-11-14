import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { mainLogo, user } from "@/constants/images";
import { Link, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = await AsyncStorage.getItem("currentUser");
        if (currentUser) {
          const userData = JSON.parse(currentUser);
          setUsername(userData.username);
        }
      } catch (error) {
        console.error("Failed to fetch user data from AsyncStorage:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("currentUser");
    router.push("/sign-in");
  };

  return (
    <View className="relative">
      <View className="flex-row items-center justify-between w-full px-2 py-4 border-b border-white">
        <Link href="/home" className="h-20">
          <Image source={mainLogo} alt="logo" resizeMode="contain" />
        </Link>
        <Pressable
          className="flex-row gap-1 items-center"
          onPress={() => setIsModalOpen(!isModalOpen)}
        >
          <Text className="text-white text-md">{username || "User"}</Text>
          <Image
            source={user}
            alt="user"
            resizeMode="contain"
            className="w-20 h-20"
          />
        </Pressable>
      </View>
      {isModalOpen && (
        <View className="absolute top-20 right-20 shadow-xl shadow-white rounded-md items-center justify-center px-4 py-1 bg-app-form w-52">
          <TouchableOpacity className="p-2" onPress={handleLogout}>
            <Text className="text-white text-lg">Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;
