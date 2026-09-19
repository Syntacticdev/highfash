import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type SafeAreaProps = ComponentProps<typeof SafeAreaView>;
const SafeAreaWrapper = ({ className, ...props }: SafeAreaProps) => {
  return (
    <SafeAreaView className={cn("flex-1 bg-white", className)} {...props} />
  );
};

export default SafeAreaWrapper;

const styles = StyleSheet.create({});
