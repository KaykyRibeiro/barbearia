import "@/styles/globals.css";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout(){
  return (
    <GestureHandlerRootView>
      <Slot />
    </GestureHandlerRootView>
  )
}