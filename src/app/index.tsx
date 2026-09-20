import Hero from "@/components/home/hero";
import SafeAreaWrapper from "@/components/ui/safe-area-wrapper";
import { Search, ShoppingCart } from "lucide-react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
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
      </ScrollView>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({});
