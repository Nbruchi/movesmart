import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import FormLogo from "@/components/form/FormLogo";
import { google } from "@/constants/images";
import { Link, router, useLocalSearchParams } from "expo-router";
import { ACCOUNTS } from "@/constants/accounts";
import * as yup from "yup";
import { Formik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Validation Schema
const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

const SignInScreen = () => {
  const { type } = useLocalSearchParams();

  const handleLogin = async (values: typeof initialValues) => {
    const existingUsers = await AsyncStorage.getItem("users");
    const users = existingUsers ? JSON.parse(existingUsers) : [];

    const user = users.find(
      (user: any) =>
        user.email === values.email && user.password === values.password
    );

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    await AsyncStorage.setItem("currentUser", JSON.stringify(user));
    router.push("/home");
  };

  // Determine the account type based on the URL parameter
  const accountType =
    type === "station-admin" ? ACCOUNTS.STATION_ADMIN : ACCOUNTS.PERSONAL;

  return (
    <SafeAreaView className="h-full bg-app-bg px-10">
      <ScrollView>
        <View className="w-full min-h-[90vh] justify-center px-4 my-6">
          <FormLogo />
          <View className="w-full min-h-[90vh] items-center">
            <Text className="text-white text-3xl uppercase mb-6">Login</Text>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View className="bg-app-form py-4 w-full rounded-xl px-6">
                  <Text className="text-white uppercase text-2xl text-center mb-8">
                    {accountType} Account
                  </Text>
                  <View className="flex-col gap-2 items-center">
                    <TextInput
                      placeholder="Email"
                      placeholderTextColor="#aaa"
                      className="border-b border-white w-full p-2 text-white placeholder:text-white my-8 placeholder:text-xl"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                    />
                    {touched.email && errors.email && (
                      <Text className="text-red-500">{errors.email}</Text>
                    )}
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor="#aaa"
                      className="border-b border-white w-full p-2 text-white placeholder:text-white my-8 placeholder:text-xl"
                      secureTextEntry
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                    />
                    {touched.password && errors.password && (
                      <Text className="text-red-500">{errors.password}</Text>
                    )}
                  </View>
                  <View className="flex-col items-center justify-center w-full gap-2 mt-10">
                    <TouchableOpacity
                      onPress={() => handleSubmit()}
                      className="items-center bg-app-btn rounded-lg py-2 justify-center px-8"
                    >
                      <Text className="text-xl text-white">Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center gap-2 bg-white rounded-lg p-2 justify-center pt-0">
                      <Text className="text-lg">Continue with</Text>
                      <Image
                        source={google}
                        resizeMode="contain"
                        className="w-6 h-6"
                      />
                    </TouchableOpacity>
                    <View className="flex-row gap-1 items-center">
                      <Text className="text-white text-lg">
                        Don't have an account?
                      </Text>
                      <Link href="/sign-up" className="text-app-btn text-lg">
                        Signup
                      </Link>
                    </View>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
