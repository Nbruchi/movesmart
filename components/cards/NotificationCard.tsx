import { arrowRight } from "@/constants/images";
import { STATE } from "@/constants/ticketData";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";

interface NotificationCardProps {
  type: string;
  from?: string;
  to?: string;
  date?: string;
  time?: string;
  price?: string;
  driver?: string;
  owner?: string;
  states: string[];
}

const NotificationCard = ({
  type,
  from,
  to,
  date,
  time,
  price,
  driver,
  owner,
  states,
}: NotificationCardProps) => {
  return (
    <View className="px-8 py-2 w-full bg-app-form my-2 rounded-xl">
      <Text className="text-app-btn text-xl ml-4">{type}</Text>
      <View className="flex-row items-center justify-between">
        <View className="flex-col gap-2 items-start justify-start">
          {from && to && (
            <View className="flex-row gap-1 items-center">
              <Text className="text-white">{from}</Text>
              <Image
                source={arrowRight}
                alt="right"
                className="w-4 h-4"
                resizeMode="contain"
              />
              <Text className="text-white">{to}</Text>
            </View>
          )}
          {date && <Text className="text-white">{date}</Text>}
          {time && <Text className="text-white">{time}</Text>}
          {owner && <Text className="text-white">Owner: {owner}</Text>}
          {driver && <Text className="text-white">Driver: {driver}</Text>}
          {price && <Text className="text-white">Price: {price}</Text>}
        </View>
        <View>
          {states.map((state) => {
            let className;
            if (
              state === STATE.USED ||
              state === STATE.PENDING ||
              state === STATE.DISCOUNT
            ) {
              className = "bg-green-200";
            }
            if (state === STATE.DELETED) {
              className = "bg-red-200";
            }

            return (
              <View
                className={`flex-row gap-1 rounded-md px-2 my-1 items-center justify-start ${className}`}
                key={state}
              >
                <View
                  className={`
                    ${state === STATE.DELETED ? "bg-red-900" : "bg-green-900"}
                    w-2 h-2 rounded-full
                  `}
                />
                <Text
                  className={
                    state === STATE.DELETED ? "text-red-900" : "text-green-900"
                  }
                >
                  {state}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;
