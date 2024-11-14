import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import TravelCard from "../cards/TravelCard";

const FirstScreen = () => {
  return (
    <ScrollView className="h-full">
      <Text className="text-white text-2xl my-4">
        Search a ticket for your journey
      </Text>
      <View className="bg-app-form p-4 rounded-xl">
        <View className="flex-row items-center justify-around w-full mb-4">
          <View className="gap-2 w-1/3">
            <Text className="text-white text-lg">From:</Text>
            <TextInput
              className="bg-white p-2 text-black rounded-md w-full"
              placeholder="Location"
            />
          </View>
          <View className="gap-2 w-1/3">
            <Text className="text-white text-lg">To:</Text>
            <TextInput
              className="bg-white p-2 text-black rounded-md w-full"
              placeholder="Destination"
            />
          </View>
        </View>
        <View className="flex-row items-center justify-around w-full">
          <View className="gap-2 w-3/12">
            <Text className="text-white text-lg">Date:</Text>
            <TextInput
              className="bg-white p-2 text-black rounded-md w-full"
              placeholder="Date"
            />
          </View>
          <View className="gap-2 w-3/12">
            <Text className="text-white text-lg">Passengers:</Text>
            <TextInput
              className="bg-white p-2 text-black rounded-md w-full"
              placeholder="Passengers"
            />
          </View>
          <View className="gap-2 w-3/12">
            <Text className="text-white text-lg">Luggage:</Text>
            <TextInput
              className="bg-white p-2 text-black rounded-md w-full"
              placeholder="Luggage"
            />
          </View>
        </View>
        <TouchableOpacity className="self-center p-4 rounded-xl bg-app-btn items-center justify-center mt-8">
          <Text className="text-white text-lg">Search a ticket</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-col gap-2 w-full my-6">
        <View className="flex-row items-center justify-between w-full">
          <Text className="text-white text-xl">Available Routes</Text>
          <Text className="flex items-center justify-center text-white text-lg">
            View more{" "}
            <AntDesign name="right" size={15} color="#fff" className="" />
          </Text>
        </View>
        <View className="bg-app-form p-4 flex-col items-start rounded-xl gap-y-4">
          <TravelCard from="Nyabugogo" to="Nyamagabe, Rulindo, Kabeza" />
          <TravelCard from="Gisenyi" to="Nyamagabe, Rulindo, Kabeza" />
          <TravelCard from="Musanze" to="Nyamagabe, Rulindo, Kabeza" />
        </View>
      </View>
    </ScrollView>
  );
};

export default FirstScreen;
