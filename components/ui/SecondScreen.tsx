import { View, Text, Image } from "react-native";
import React from "react";
import { allCars, recommendedCars } from "@/constants/carData";

const SecondScreen = () => {
  return (
    <View className="w-full px-4 h-full">
      <View className="w-full flex-col items-center justify-center gap-y-4">
        {allCars.map((car) => (
          <View
            className="flex-col gap-2 items-center justify-center w-full"
            key={car.id}
          >
            <Image
              source={car.image}
              alt="car"
              resizeMode="cover"
              className="w-[600px] h-[600px] rounded-xl"
            />
          </View>
        ))}
      </View>
      <View className="flex-col gap-4 items-center justify-center my-4">
        <Text className="text-white text-2xl">Recommended Cars</Text>
        <View className="w-full flex-col items-center justify-center gap-y-4">
          {recommendedCars.map((car) => (
            <View
              className="flex-col gap-2 w-full items-center justify-center"
              key={car.id}
            >
              <Text className="text-lg text-app-green my-2">
                {car.recommendation}% recommended
              </Text>
              <Image
                source={car.imgURL}
                alt="car"
                resizeMode="cover"
                className="w-[600px] h-[600px] rounded-xl"
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SecondScreen;
