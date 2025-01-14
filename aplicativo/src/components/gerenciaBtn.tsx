import { Pressable, Text } from "react-native";

import Entypo from '@expo/vector-icons/Entypo';

export function GerenciaBtn() {
    return (
        <Pressable className="mr-2 flex-col items-center justify-center">
            <Entypo name="bar-graph" size={34} color="white" />
            <Text className="text-white">Gerenciar</Text>
        </Pressable>
    )    
}
