import { Image, View } from "react-native";
import { logo } from "../../constants/images";

const FormLogo = () => {
  return (
    <View className="w-full justify-center px-4 my-6">
      <Image source={logo} resizeMode="contain" className="w-full h-20" />
      <View className="bg-white h-[1px] w-2/3 self-center -translate-y-6" />
    </View>
  );
};

export default FormLogo;
