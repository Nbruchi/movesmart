import { Tabs } from "expo-router";
import React from "react";

import TabBarIcon from "@/components/navigation/TabBarIcon";
import { account, cars, home, notifications } from "@/constants/images";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#444",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#041C32",
          height: 80,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="Home"
              color={color}
              icon={home}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cars"
        options={{
          title: "Cars",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="Cars"
              color={color}
              icon={cars}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="Notifications"
              color={color}
              icon={notifications}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="Account"
              color={color}
              icon={account}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
