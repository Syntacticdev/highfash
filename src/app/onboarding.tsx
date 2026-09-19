import { router } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const onboarding = () => {
  const foreground = require("@/assets/images/fashiq_foreground.png");
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={foreground}
        className="w-full h-[90%] "
      />
      <View className="p-4 mb-8">
        <Pressable
          onPress={() => router.replace("/")}
          className="flex-row  bg-[#261641] p-6 px-12 rounded-lg"
        >
          <View className="flex-row items-center gap-4 space-between">
            <Text className="text-white font-bold">Get Started</Text>
            <ArrowRight color={"#ffffff"} className="fill-white" />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "90%",
  },
  button: {
    backgroundColor: "#3b82f6",
    padding: 16,
    borderRadius: 8,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e40af",
  },
});
