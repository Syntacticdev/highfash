import { ArrowRight, Tag } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ExclusiveCard = () => {
  return (
    <View className="bg-[#e1d6f8] flex-row gap-4 p-4 rounded-lg mx-2 mt-4 ">
      <Tag />
      <View className="flex-1 flex-row items-center justify-between">
        <View>
          <Text className="font-bold">Exclusive Offer</Text>
          <Text>Extra 15% off on first order</Text>
        </View>

        <Pressable className="w-8 h-8 items-center justify-center rounded-full bg-[#160e24]">
          <ArrowRight size={18} color={"#fff"} />
        </Pressable>
      </View>
    </View>
  );
};

export default ExclusiveCard;

const styles = StyleSheet.create({});
