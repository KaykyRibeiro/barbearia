import "../styles/global.css";
import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout(){
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" translucent />
      <Slot />
    </GestureHandlerRootView>
  )
}