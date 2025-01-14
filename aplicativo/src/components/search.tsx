import { Pressable, Text } from "react-native";

import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

export function SearchButton() {
    return (
        <Pressable className="mr-2 flex-col items-center justify-center">
            <AntDesign name="search1" size={34} color="white" />
            <Text className="text-white">Buscar</Text>
        </Pressable>
    )    
}