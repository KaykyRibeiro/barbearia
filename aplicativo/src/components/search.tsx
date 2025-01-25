import { Pressable, Text } from "react-native";

import { useRouter } from "expo-router";

import AntDesign from '@expo/vector-icons/AntDesign';


export function SearchButton() {
    const router = useRouter();
    return (
        <Pressable 
            className="mr-2 flex-col items-center justify-center"
            onPress={() => {router.push("./pesquisa")}}
        >
            <AntDesign name="search1" size={34} color="white" />
            <Text className="text-white">Buscar</Text>
        </Pressable>
    )    
}