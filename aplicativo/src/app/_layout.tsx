import "../styles/global.css";
import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthProvider } from "@/src/context/AuthContext";

export default function Layout(){
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
      <StatusBar backgroundColor="transparent" translucent />
      <Slot />
      </AuthProvider>
    </GestureHandlerRootView>
  )
}