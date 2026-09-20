import { router } from "expo-router";
import { Heart } from "lucide-react-native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const ProductCard = () => {
  return (
    <Pressable onPress={() => router.push("/1")}>
      <View className="h-[250px] rounded-lg overflow-hidden w-[200px] bg-[#f3f3f3]">
        <View className=" relative bg-[#d0d0d2] rounded-lg  h-[75%] ">
          <Image
            resizeMode="contain"
            source={require("@/assets/images/model.png")}
            className="h-full w-full rounded-[20px]"
          />
          <Text className="absolute bg-black top-2 left-2 text-lg font-bold text-white px-2 py-1 rounded-md">
            -20%
          </Text>
        </View>
        <View className="flex-row items-center justify-between px-2 ">
          <View className="w-4/5 py-1">
            <Text className="text-sm font-bold text-[#160e24]">
              Lavender Blazer
            </Text>
            <Text numberOfLines={1} className="text-[#160e24] font-bold">
              $119.99
            </Text>
          </View>
          <Heart />
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
