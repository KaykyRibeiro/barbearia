
import { Pressable, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";
export function MenuButton(){
    return (
        <Pressable className="mr-2 flex-col items-center justify-center">
            <Ionicons name="menu" size={34} color="white" />
            <Text className="text-white">Opções</Text>
        </Pressable>
    )
}