
import { Pressable, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
export function MenuButton() {
    const navigation = useNavigation();
    const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer());
    return (
        <Pressable
            onPress={toggleMenu}
            className="mr-2 flex-col items-center justify-center">
            <Ionicons name="menu" size={34} color="white" />
            <Text className="text-white">Opções</Text>
        </Pressable>
    )
}