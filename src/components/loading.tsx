import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <ActivityIndicator
      className="flex-1 justify-center items-center bg-green-500"
      size={48}
      color="#F48F56"
    />
  );
}
