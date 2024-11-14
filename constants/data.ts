export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  cardNumber: "",
  username: "",
  password: "",
};

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  username: string;
  loginTime: number;
  // Add more properties as needed for your user data
}
