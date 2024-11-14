import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/ui/Header";
import { activity } from "@/constants/images";
import { ticketData } from "@/constants/ticketData";
import NotificationCard from "@/components/cards/NotificationCard";

const NotificationsScreen = () => {
  const [areNotifications] = useState(false);

  return (
    <SafeAreaView className="h-full px-10 bg-app-bg">
      <ScrollView>
        <Header />
        <View className="w-full p-4">
          <Text className="text-white text-3xl">Notifications</Text>
          {areNotifications ? (
            <View className="w-full min-h-[80vh] items-center justify-center flex-col">
              {ticketData.map((ticket) => (
                <NotificationCard key={ticket.id} {...ticket} />
              ))}
            </View>
          ) : (
            <View className="w-full min-h-[80vh] items-center justify-center flex-col gap-2">
              <Image
                source={activity}
                alt="activity"
                resizeMode="contain"
                className="w-20 h-20"
              />
              <Text className="text-white text-2xl text-center">
                No new notifications
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationsScreen;
