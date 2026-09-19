import SafeAreaWrapper from "@/components/ui/safe-area-wrapper";
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
        <View className="">
          <View className="flex-row items-center">
            <Text className="text-2xl font-semibold">HIGH</Text>
            <Text className="text-2xl font-semibold">Fash</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({});
