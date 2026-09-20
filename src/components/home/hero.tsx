import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const hero = () => {
  return (
    <View className="bg-[#160e24] relative my-4 h-[300px] w-full rounded-[20px]">
      <View className="absolute left-5 top-5 flex h-full w-[50%] flex-col items-start justify-center gap-2">
        <Text className="text-lg font-bold text-slate-200">New Season</Text>
        <Text className="text-3xl text-white">New Styles</Text>
        <View className="my-3">
          <Text className="text-slate-200">Up to 40% off.</Text>
          <Text className="text-slate-200">Your latest collection</Text>
        </View>

        <Pressable className="rounded-md py-4 px-6 bg-white text-center ">
          <Text className="text-[#160e24] text-lg font-bold">Shop Now</Text>
        </Pressable>
      </View>
      <View>
        <Image
          resizeMode="contain"
          source={require("@/assets/images/model.png")}
          className="h-[300px] w-2/4 rounded-[20px]   self-end   "
        />
      </View>
    </View>
  );
};

export default hero;

const styles = StyleSheet.create({});
