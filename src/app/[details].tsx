import SafeAreaWrapper from "@/components/ui/safe-area-wrapper";
import { router } from "expo-router";
import {
    ChevronLeft,
    Heart,
    ShoppingCartPlus,
    Star,
} from "lucide-react-native";
import { useState } from "react";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const Details = () => {
  const colors = ["#000000", "#ede123", "#726c1e", "#0d092c"];
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(colors[1]);
  const sizes = ["S", "M", "L", "XL"];
  return (
    <SafeAreaWrapper>
      <ScrollView className="flex-1 px-4">
        <View className="flex-row justify-between">
          <ChevronLeft size={26} onPress={() => router.back()} />
          <Heart size={26} fill={"#000"} />
        </View>

        <View className="bg-[#242121] h-[400px] items-center justify-end overflow-hidden  rounded-2xl my-4 ">
          <Image
            resizeMode="contain"
            source={require("@/assets/images/model.png")}
            className="h-[80%] w-[80%]"
          />
        </View>

        <View>
          <View className="flex-row justify-between">
            <Text className="text-xl font-bold">FASHIQ</Text>
            <View className="flex-row items-center gap-2">
              <Star fill={"#000"} />
              <Text className="font-bold text-lg">4.8</Text>
              <Text>(128)</Text>
            </View>
          </View>

          <Text className="text-2xl font-bold my-2">Lavender Blazer</Text>
          <View className="flex-row items-center gap-4 mt-6">
            <Text className="active-amount text-3xl font-bold">$79.99</Text>
            <Text className="prev-amount text-xl ">$60.99</Text>
            <Text className="discount bg-[#e1d6f8] text-[#7852cc] p-1 rounded-md px-2">
              20% OFF
            </Text>
          </View>

          <View className="flex-row gap-4 mt-2">
            <View className="flex-row items-center gap-2 my-2">
              <Text className="font-bold text-lg">Size</Text>
              <View className="flex-row gap-2">
                {sizes.map((s) => (
                  <Text
                    className={`
                        ${
                          selectedSize == s
                            ? "bg-[#160e24] text-white"
                            : "bg-white border-2 border-slate-400 text-[#160e24]"
                        } 
                        py-2 px-4 text-sm rounded-full font-bold`}
                    key={s}
                  >
                    {s}
                  </Text>
                ))}
              </View>
            </View>
            <View className="flex-row items-center gap-2 my-2">
              <Text className="font-bold text-lg">Color</Text>
              <View className="flex-row gap-2">
                {colors.map((c) => (
                  <Pressable key={c} onPress={() => setSelectedColor(c)}>
                    <View
                      style={{ backgroundColor: c }}
                      className={` w-6 h-6 rounded-full`}
                    />
                  </Pressable>
                ))}
              </View>
            </View>
          </View>
          <View className="my-2">
            <Text className="font-bold text-xl">Description</Text>
            <Text className="text-lg">
              Elevate your everyday style with our tailored Lavender Blazer.
              Crafted from a smooth, lightweight fabric, it features a polished
              silhouette, comfortable fit, and versatile design that transitions
              effortlessly from the office to evening plans.
            </Text>
          </View>
        </View>
      </ScrollView>

      <View className="flex-row gap-2 p-4">
        <Pressable className="border-2 w-2/4 p-4 rounded-full  border-[#160e24] flex-row gap-2 items-center justify-center ">
          <ShoppingCartPlus />
          <Text className="font-bold">Add to cart</Text>
        </Pressable>
        <Pressable className="border-2 w-2/4 p-4 rounded-full  bg-[#160e24] flex-row gap-2 items-center justify-center ">
          <ShoppingCartPlus color={"#fff"} />
          <Text className="font-bold text-white">Buy Now</Text>
        </Pressable>
      </View>
    </SafeAreaWrapper>
  );
};

export default Details;

const styles = StyleSheet.create({});
