
import { Pressable } from "react-native";

import { Ionicons } from "@expo/vector-icons";
export function MenuButton(){
    return (
        <Pressable className="mr-2">
            <Ionicons name="menu" size={24} color="black" />
        </Pressable>
    )
}