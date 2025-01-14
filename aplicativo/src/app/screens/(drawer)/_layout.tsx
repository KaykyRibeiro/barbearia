import React from "react";
import { Alert, Text, View, TouchableOpacity, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Drawer } from "expo-router/drawer";


import { Avatar } from "@/src/components/avatar";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Layout() {
    const router = useRouter();
    return (
        <Drawer
            defaultStatus="open"
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    width: 350,
                    backgroundColor: '#000',
                },
                drawerPosition: 'right'
            }}
            drawerContent={(props) => (
                <View className="flex-1 items-center py-10">
                    <View className="flex-col justify-center items-center mt-4">
                        <Avatar
                            source={{ uri: "https://github.com/KaykyRibeiro.png" }}
                            size="xl"
                        />
                        <Text className="text-white mt-2 text-3xl">Olá, Kayky Ribeiro</Text>
                        <Pressable className="flex-row gap-2 items-center mt-4 bg-white rounded-2xl px-2 py-2">
                            <AntDesign name="edit" size={24} color="black" />
                            <Text className="text-black font-semibold">Editar Perfil</Text>
                        </Pressable>
                    </View>

                    <TouchableOpacity

                        onPress={() => router.push("./home")}
                    >
<Text >Início</Text>
                    </TouchableOpacity>
                    <TouchableOpacity

                        onPress={() => router.push("./gerencia")}
                    >
                        <Text >Perfil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Alert.alert("Sair", "Você foi desconectado!")}
                    >
                        <Text>Sair</Text>
                    </TouchableOpacity>
                </View>
            )}

        >

        </Drawer>
    )
}