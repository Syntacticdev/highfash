import Hero from "@/components/home/hero";
import ExclusiveCard from "@/components/ui/ExclusiveCard";
import ProductCard from "@/components/ui/ProductCard";
import SafeAreaWrapper from "@/components/ui/safe-area-wrapper";
import { Search, ShoppingCart } from "lucide-react-native";
import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  const categories = [
    { id: "all", name: "All", icon: require("@/assets/icons/all.png") },
    { id: "men", name: "Men", icon: require("@/assets/icons/men.png") },
    { id: "women", name: "Women", icon: require("@/assets/icons/women.png") },
    { id: "shoes", name: "Shoes", icon: require("@/assets/icons/shoes.png") },
    { id: "bags", name: "Bags", icon: require("@/assets/icons/bags.png") },
  ];
  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <SafeAreaWrapper>
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pb-5 pt-2"
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Text className="text-2xl font-semibold">HIGH</Text>
            <Text className="text-2xl font-semibold">Fash</Text>
          </View>
          <View className="flex-row items-center gap-8">
            <Search />
            <View className="relative">
              <View className="absolute -top-2 -right-4 z-20  h-6 w-6 items-center justify-center rounded-full bg-black">
                <Text className="text-white text-center">11</Text>
              </View>
              <ShoppingCart />
            </View>
          </View>
        </View>

        <Hero />

        {/* Categories Section */}
        <FlatList
          data={categories}
          horizontal
          contentContainerStyle={{ gap: 20 }}
          showsHorizontalScrollIndicator={false}
          className="my-4"
          renderItem={({ item }) => (
            <Pressable onPress={() => setSelectedCategory(item.id)}>
              <View className="items-center gap-2">
                <View
                  className={`py-2 px-4 rounded-full w-[60px] h-[60px] bg-slate-200 ${
                    selectedCategory === item.id
                      ? " border border-[#160e24] "
                      : " border-none"
                  }`}
                >
                  <Image
                    resizeMode="contain"
                    source={item.icon}
                    className="w-full h-full rounded-full mr-2"
                  />
                </View>
                <Text
                  className={`text-lg font-bold ${
                    selectedCategory === item.id
                      ? "text-[#2a1c42]"
                      : "text-[#160e24]"
                  }`}
                >
                  {item.name}
                </Text>
              </View>
            </Pressable>
          )}
        />

        {/* Best Pick */}
        <View className="flex-row items-center justify-between my-2">
          <Text className="text-xl font-bold text-[#160e24]">Best Picks</Text>
          <Text className="text-[#160e24]" onPress={() => {}}>
            See All
          </Text>
        </View>

        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          horizontal
          contentContainerStyle={{ gap: 10 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ProductCard />}
        />

        <ExclusiveCard />
      </ScrollView>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({});
