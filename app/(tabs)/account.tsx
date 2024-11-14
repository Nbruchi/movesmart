import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import * as yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Formik } from "formik";
import Header from "@/components/ui/Header";
import { profileAvatar } from "@/constants/images";

const validationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  cardNumber: yup.string().required("Card number is required"),
  username: yup.string().required("Username is required"),
  newPassword: yup.string(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), undefined], "Passwords must match"),
});

const AccountScreen: React.FC = () => {
  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    username: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = await AsyncStorage.getItem("currentUser");
        if (currentUser) {
          const userData = JSON.parse(currentUser);
          setInitialValues({
            ...userData,
            newPassword: "",
            confirmPassword: "",
          });
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdate = async (values: typeof initialValues) => {
    const updatedUser = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      cardNumber: values.cardNumber,
      username: values.username,
      password: values.newPassword,
    };

    try {
      await AsyncStorage.setItem("currentUser", JSON.stringify(updatedUser));
      console.log("User data updated successfully");
    } catch (error) {
      console.error("Failed to update user data:", error);
    }
  };

  return (
    <SafeAreaView className="w-full h-full bg-app-bg">
      <ScrollView className="w-full px-4">
        <Header />
        <View className="flex-1 justify-center px-12">
          <View className="w-full flex-col items-center justify-center my-6">
            <Image
              source={profileAvatar}
              alt="avatar"
              resizeMode="contain"
              className="w-52"
            />
          </View>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleUpdate}
            enableReinitialize
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View className="bg-app-form px-6 py-4 rounded-xl">
                <TextInput
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.firstName}
                  placeholder="First Name"
                  className="my-6 border-b border-white text-lg text-white"
                  placeholderTextColor="#333"
                />
                {touched.firstName && errors.firstName && (
                  <Text style={{ color: "red" }}>{errors.firstName}</Text>
                )}

                <TextInput
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.lastName}
                  placeholder="Last Name"
                  className="my-6 border-b border-white text-lg text-white"
                  placeholderTextColor="#333"
                />
                {touched.lastName && errors.lastName && (
                  <Text style={{ color: "red" }}>{errors.lastName}</Text>
                )}

                <TextInput
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  placeholder="Email"
                  className="my-6 border-b border-white text-lg text-white"
                  placeholderTextColor="#333"
                />
                {touched.email && errors.email && (
                  <Text style={{ color: "red" }}>{errors.email}</Text>
                )}

                <TextInput
                  onChangeText={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  value={values.phoneNumber}
                  placeholder="Phone Number"
                  className="my-6 border-b border-white text-lg text-white"
                  placeholderTextColor="#333"
                />
                {touched.phoneNumber && errors.phoneNumber && (
                  <Text style={{ color: "red" }}>{errors.phoneNumber}</Text>
                )}

                <TextInput
                  onChangeText={handleChange("cardNumber")}
                  onBlur={handleBlur("cardNumber")}
                  value={values.cardNumber}
                  placeholder="Card Number"
                  className="my-6 border-b border-white text-lg text-white"
                  placeholderTextColor="#333"
                />
                {touched.cardNumber && errors.cardNumber && (
                  <Text style={{ color: "red" }}>{errors.cardNumber}</Text>
                )}

                <TextInput
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                  placeholder="Username"
                  className="my-6 border-b border-white text-lg text-white"
                  placeholderTextColor="#333"
                />
                {touched.username && errors.username && (
                  <Text style={{ color: "red" }}>{errors.username}</Text>
                )}

                <TextInput
                  onChangeText={handleChange("newPassword")}
                  onBlur={handleBlur("newPassword")}
                  value={values.newPassword}
                  placeholder="New Password"
                  className="my-6 border-b border-white text-lg text-white"
                  placeholderTextColor="#333"
                />
                {touched.newPassword && errors.newPassword && (
                  <Text style={{ color: "red" }}>{errors.newPassword}</Text>
                )}

                <TextInput
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  placeholder="Confirm Password"
                  className="my-6 border-b border-white text-lg text-white"
                  placeholderTextColor="#333"
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={{ color: "red" }}>{errors.confirmPassword}</Text>
                )}
                <TouchableOpacity
                  onPress={() => handleSubmit()}
                  className="self-center py-4 bg-app-btn px-12 rounded-xl"
                >
                  <Text className="text-white text-lg uppercase">Update</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;
