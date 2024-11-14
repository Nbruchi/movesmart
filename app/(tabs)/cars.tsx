import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/ui/Header";
import { carsData, myCars } from "@/constants/carData";
import { AntDesign } from "@expo/vector-icons";
import { cars1, cars2 } from "@/constants/images";
import { router } from "expo-router";

const CarsScreen = () => {
  return (
    <SafeAreaView className="h-full px-4 bg-app-bg">
      <ScrollView>
        <Header />
        <View className="w-full px-4 min-h-screen">
          <View className="w-full flex-row items-center gap-x-2 justify-between my-2 mt-8">
            {carsData.map((car) => (
              <View
                key={car.id}
                className="rounded-md flex-col gap-1 bg-app-btn px-2 py-2 pt-0 items-center justify-center w-40"
              >
                <Text className="text-white text-md flex-nowrap">
                  {car.title}
                </Text>
                <Text className="text-white text-lg">{car.value}</Text>
              </View>
            ))}
          </View>
          <View className="flex-row items-center justify-between my-8 w-full">
            <View className="flex-row gap-2 items-center">
              <Text className="text-white text-lg">Rate:</Text>
              <View className="flex-row gap-1">
                {[1, 2, 3, 4].map((item) => (
                  <AntDesign name="star" color="yellow" size={16} key={item} />
                ))}
              </View>
            </View>
            <TouchableOpacity
              className="flex-row gap-2 items-center justify-center py-2 px-4 bg-app-bg pt-0 border-2 border-white/30 rounded-xl"
              onPress={() => router.push("/create-car")}
            >
              <AntDesign name="plus" color="#fff" size={20} />
              <Text className="text-white text-lg">Add car</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-col gap-2 my-4">
            <Text className="text-white text-xl">Car rate statistics</Text>
            <View className="bg-app-form rounded-xl w-full items-center justify-center">
              <Image
                source={cars1}
                alt="dashboard"
                resizeMode="contain"
                className="w-full"
              />
            </View>
          </View>
          <View className="flex-col gap-2 my-4">
            <Text className="text-white text-xl">Client statistics</Text>
            <View className="bg-app-form rounded-xl w-full items-center justify-center">
              <Image
                source={cars2}
                alt="dashboard"
                resizeMode="contain"
                className="w-full"
              />
            </View>
          </View>
          <View className="flex-row items-center justify-between my-4 w-full px-4">
            <View className="flex-row gap-2 items-center">
              <Text className="text-white text-lg">My cars</Text>
            </View>
            <View className="flex-row gap-1 items-center justify-center py-2 px-4 bg-app-bg">
              <Text className="text-white text-lg">View More</Text>
              <AntDesign name="right" color="#fff" size={16} />
            </View>
          </View>
          <View className="flex-col gap-y-8 items-center justify-center w-full my-4">
            {myCars.map((item) => (
              <View
                className="bg-app-form px-2 py-8 rounded-xl w-full items-center justify-center"
                key={item.id}
              >
                <Image
                  source={item.imageURL}
                  alt={item.name}
                  resizeMode="cover"
                  className="w-96 rounded-xl h-52"
                />
                <View className="flex-row items-center justify-around w-full mt-4">
                  <View className="flex-col gap-1 justify-start">
                    <Text className="text-white text-md">
                      Name: {item.name}
                    </Text>
                    <Text className="text-white text-md">
                      Price: ${item.price}/day
                    </Text>
                    <Text className="text-white text-md">
                      Coverage: {item.price}km/liter
                    </Text>
                  </View>
                  <View className="flex-col gap-4 items-center justify-center">
                    <TouchableOpacity className="flex items-center justify-center px-4 py-1 rounded-md bg-white w-20">
                      <Text className="text-secondary text-md">Update</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex items-center justify-center px-4 py-1 rounded-md bg-white w-20">
                      <Text className="text-md text-app-red">Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CarsScreen;
