// import { View, Text } from "react-native";
// import React, { useState } from "react";
// import { Formik } from "formik";
// import * as yup from "yup";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const validationSchema = yup.object().shape({
//   name: yup.string().required("Car name is required"),
//   speed: yup.number().required("Car's spped is required"),
//   seats: yup.number().required("Number of seats is required"),
//   price: yup.number().required("Price number is required"),
//   color: yup.string().required("Car color is required"),
//   use: yup.string().required("Car's use is required"),
//   model: yup.string().required("Car's model is required"),
//   liters: yup.number().required("Liters per km required"),
// });

// const SpecificationsForm = () => {
//   const [initialValues, setInitialValues] = useState({
//     name: "",
//     speed: 0,
//     seats: 0,
//     price: 0,
//     color: "",
//     use: "",
//     model: "",
//     liters: 0,
//   });

//    const handleUpdate = async (values: typeof initialValues) => {
//      const newCar = {
//        name: values.name,
//        speed: values.speed,
//        seats: values.seats,
//        price: values.price,
//        color: values.color,
//        use: values.use,
//        model: values.model,
//        liters: values.liters,
//      };

//      try {
//        await AsyncStorage.setItem("newCar", JSON.stringify(newCar));
//        console.log("Car created successfully");
//      } catch (error) {
//        console.error("Failed to create a new car:", error);
//      }
//    };

//   return (
//     <View>
//       <View>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleUpdate}
//           enableReinitialize
//         >
//           {({
//             handleChange,
//             handleBlur,
//             handleSubmit,
//             values,
//             errors,
//             touched,
//           }) => (
//             <View className="bg-app-form px-6 py-4 rounded-xl">
//               <TextInput
//                 onChangeText={handleChange("firstName")}
//                 onBlur={handleBlur("firstName")}
//                 value={values.firstName}
//                 placeholder="First Name"
//                 className="my-6 border-b border-white text-lg text-white"
//                 placeholderTextColor="#333"
//               />
//               {touched.firstName && errors.firstName && (
//                 <Text style={{ color: "red" }}>{errors.firstName}</Text>
//               )}

//               <TextInput
//                 onChangeText={handleChange("lastName")}
//                 onBlur={handleBlur("lastName")}
//                 value={values.lastName}
//                 placeholder="Last Name"
//                 className="my-6 border-b border-white text-lg text-white"
//                 placeholderTextColor="#333"
//               />
//               {touched.lastName && errors.lastName && (
//                 <Text style={{ color: "red" }}>{errors.lastName}</Text>
//               )}

//               <TextInput
//                 onChangeText={handleChange("email")}
//                 onBlur={handleBlur("email")}
//                 value={values.email}
//                 placeholder="Email"
//                 className="my-6 border-b border-white text-lg text-white"
//                 placeholderTextColor="#333"
//               />
//               {touched.email && errors.email && (
//                 <Text style={{ color: "red" }}>{errors.email}</Text>
//               )}

//               <TextInput
//                 onChangeText={handleChange("phoneNumber")}
//                 onBlur={handleBlur("phoneNumber")}
//                 value={values.phoneNumber}
//                 placeholder="Phone Number"
//                 className="my-6 border-b border-white text-lg text-white"
//                 placeholderTextColor="#333"
//               />
//               {touched.phoneNumber && errors.phoneNumber && (
//                 <Text style={{ color: "red" }}>{errors.phoneNumber}</Text>
//               )}

//               <TextInput
//                 onChangeText={handleChange("cardNumber")}
//                 onBlur={handleBlur("cardNumber")}
//                 value={values.cardNumber}
//                 placeholder="Card Number"
//                 className="my-6 border-b border-white text-lg text-white"
//                 placeholderTextColor="#333"
//               />
//               {touched.cardNumber && errors.cardNumber && (
//                 <Text style={{ color: "red" }}>{errors.cardNumber}</Text>
//               )}

//               <TextInput
//                 onChangeText={handleChange("username")}
//                 onBlur={handleBlur("username")}
//                 value={values.username}
//                 placeholder="Username"
//                 className="my-6 border-b border-white text-lg text-white"
//                 placeholderTextColor="#333"
//               />
//               {touched.username && errors.username && (
//                 <Text style={{ color: "red" }}>{errors.username}</Text>
//               )}

//               <TextInput
//                 onChangeText={handleChange("newPassword")}
//                 onBlur={handleBlur("newPassword")}
//                 value={values.newPassword}
//                 placeholder="New Password"
//                 className="my-6 border-b border-white text-lg text-white"
//                 placeholderTextColor="#333"
//               />
//               {touched.newPassword && errors.newPassword && (
//                 <Text style={{ color: "red" }}>{errors.newPassword}</Text>
//               )}

//               <TextInput
//                 onChangeText={handleChange("confirmPassword")}
//                 onBlur={handleBlur("confirmPassword")}
//                 value={values.confirmPassword}
//                 placeholder="Confirm Password"
//                 className="my-6 border-b border-white text-lg text-white"
//                 placeholderTextColor="#333"
//               />
//               {touched.confirmPassword && errors.confirmPassword && (
//                 <Text style={{ color: "red" }}>{errors.confirmPassword}</Text>
//               )}
//               <TouchableOpacity
//                 onPress={() => handleSubmit()}
//                 className="self-center py-4 bg-app-btn px-12 rounded-xl"
//               >
//                 <Text className="text-white text-lg uppercase">Update</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </Formik>
//       </View>
//     </View>
//   );
// };

// export default SpecificationsForm;
