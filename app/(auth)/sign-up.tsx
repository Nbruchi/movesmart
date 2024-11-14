import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import FormLogo from "@/components/form/FormLogo";
import { google } from "@/constants/images";
import { Link, router } from "expo-router";
import * as yup from "yup";
import { Formik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Validation Schema
const validationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  cardNumber: yup.string().required("Card number is required"),
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  cardNumber: "",
  username: "",
  password: "",
};

const SignUpScreen: React.FC = () => {
  const handleSubmit = async (values: typeof initialValues) => {
    const existingUsers = await AsyncStorage.getItem("users");
    const users = existingUsers ? JSON.parse(existingUsers) : [];

    const userExists = users.some(
      (user: any) =>
        user.email === values.email || user.username === values.username
    );

    if (userExists) {
      alert("User already exists");
      return;
    }

    users.push(values);
    await AsyncStorage.setItem("users", JSON.stringify(users));
    await AsyncStorage.setItem("currentUser", JSON.stringify(values));
    router.push("/home");
  };

  return (
    <SafeAreaView className="h-full bg-app-bg">
      <ScrollView>
        <View className="w-full min-h-[90vh] justify-center px-4 my-6">
          <FormLogo />
          <View className="w-full min-h-[90vh] items-center">
            <Text className="text-white text-3xl uppercase mb-6">
              Create an account
            </Text>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
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
                  <TextInput
                    placeholder="First Name"
                    placeholderTextColor="#f5f5f5"
                    className="border-b border-white my-4 text-white p-2"
                    onChangeText={handleChange("firstName")}
                    onBlur={handleBlur("firstName")}
                    value={values.firstName}
                  />
                  {touched.firstName && errors.firstName && (
                    <Text className="text-red-500">{errors.firstName}</Text>
                  )}
                  <TextInput
                    placeholder="Last Name"
                    placeholderTextColor="#f5f5f5"
                    className="border-b border-white my-4 text-white p-2"
                    onChangeText={handleChange("lastName")}
                    onBlur={handleBlur("lastName")}
                    value={values.lastName}
                  />
                  {touched.lastName && errors.lastName && (
                    <Text className="text-red-500">{errors.lastName}</Text>
                  )}
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor="#f5f5f5"
                    className="border-b border-white my-4 text-white p-2"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <Text className="text-red-500">{errors.email}</Text>
                  )}
                  <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor="#f5f5f5"
                    className="border-b border-white my-4 text-white p-2"
                    onChangeText={handleChange("phoneNumber")}
                    onBlur={handleBlur("phoneNumber")}
                    value={values.phoneNumber}
                  />
                  {touched.phoneNumber && errors.phoneNumber && (
                    <Text className="text-red-500">{errors.phoneNumber}</Text>
                  )}
                  <TextInput
                    placeholder="Card Number"
                    placeholderTextColor="#f5f5f5"
                    className="border-b border-white my-4 text-white p-2"
                    onChangeText={handleChange("cardNumber")}
                    onBlur={handleBlur("cardNumber")}
                    value={values.cardNumber}
                  />
                  {touched.cardNumber && errors.cardNumber && (
                    <Text className="text-red-500">{errors.cardNumber}</Text>
                  )}
                  <TextInput
                    placeholder="Username"
                    placeholderTextColor="#f5f5f5"
                    className="border-b border-white my-4 text-white p-2"
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    value={values.username}
                  />
                  {touched.username && errors.username && (
                    <Text className="text-red-500">{errors.username}</Text>
                  )}
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="#f5f5f5"
                    className="border-b border-white my-4 text-white p-2"
                    secureTextEntry
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />
                  {touched.password && errors.password && (
                    <Text className="text-red-500">{errors.password}</Text>
                  )}
                  <TouchableOpacity
                    onPress={() => handleSubmit()}
                    className="mt-6 bg-blue-500 px-4 rounded-md py-4"
                  >
                    <Text className="text-white text-center text-lg">
                      Submit
                    </Text>
                  </TouchableOpacity>
                  <View className="flex-col items-center justify-center w-full gap-2 mt-6">
                    <TouchableOpacity className="flex-row items-center gap-2 bg-white rounded-lg p-2 justify-center pt-0">
                      <Text className="text-lg">Continue with</Text>
                      <Image
                        source={google}
                        alt="google"
                        resizeMode="contain"
                        className="w-6 h-6"
                      />
                    </TouchableOpacity>
                    <View className="flex-row gap-1 items-center">
                      <Text className="text-white text-lg">
                        Have an account?
                      </Text>
                      <Link href="/sign-in" className="text-app-btn text-lg">
                        Login
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

export default SignUpScreen;
