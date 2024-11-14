import { AppFormField } from "@manatsa/simple-react-native-formik-wizard";
import { Text, TouchableOpacity, View } from "react-native";

interface FirstFormProps {
  form: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    cardNumber: string;
    username: string;
    password: string;
  };
  onSubmit: (values: FirstFormProps["form"]) => void;
}

const FirstForm: React.FC<FirstFormProps> = ({ form, onSubmit }) => {
  const handleSubmit = () => {
    onSubmit(form);
  };

  return (
    <View className="bg-app-form py-4 w-full rounded-xl px-6">
      <AppFormField name="firstName" label="First Name" />
      <AppFormField name="lastName" label="Last Name" />
      <AppFormField name="email" label="Email" />
      <AppFormField name="phoneNumber" label="Phone Number" />
      <AppFormField name="cardNumber" label="Card Number" />
      <AppFormField name="username" label="Username" />
      <AppFormField name="password" label="Password" />
      {/* Add submit button */}
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstForm;
