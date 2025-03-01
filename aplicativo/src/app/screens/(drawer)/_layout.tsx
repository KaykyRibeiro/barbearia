import React from "react";
import { Text, View, TouchableOpacity, Pressable } from "react-native";
import { Drawer } from "expo-router/drawer";
import { Avatar } from "@/src/components/avatar";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from '@expo/vector-icons/Ionicons';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ScrollView } from "react-native-gesture-handler";

import { useRouter } from "expo-router";

export default function Layout() {
  const router = useRouter();
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "75%",
          backgroundColor: "#000",
        },
        drawerPosition: "right",
      }}
      drawerContent={(props) => (
        <View className="flex-1 py-10">
          {/* Botão para fechar o Drawer */}
          <View className="flex justify-start items-start m-4">
            <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
              <Ionicons name="arrow-forward-circle" size={36} color="white" />
            </TouchableOpacity>
          </View>
          <ScrollView className="flex-1 bg">
            <View className="flex-col justify-center items-center mt-4 border-b border-white pb-4">
              <Avatar
                source={{ uri: "https://github.com/KaykyRibeiro.png" }}
                size="lg"
              />
              <Text className="text-white mt-2 text-2xl">Olá, Kayky Ribeiro</Text>
              <Pressable className="flex-row gap-2 items-center mt-4 bg-white rounded-2xl px-2 py-2">
                <AntDesign name="edit" size={20} color="black" />
                <Text className="text-black font-semibold">Editar Perfil</Text>
              </Pressable>
            </View>
            <View className="flex-col justify-center">
              <Pressable className="flex-row gap-2 items-center px-4 py-4 m-1 bg-neutral-800/50">
                <Ionicons name="people-outline" size={22} color="white" />
                <Text className="text-white font-semibold text-lg">Area de membros</Text>
              </Pressable>
              <View className="flex-1 h-[1px] bg-neutral-700 dark:bg-neutral-100" />
              <Pressable 
                className="flex-row gap-2 items-center px-4 py-4 m-1 bg-neutral-800/50"
                onPress={() => {router.push("./gerencia/estatistica")}}
                >
                <MaterialCommunityIcons name="google-analytics" size={22} color="white" />
                <Text className="text-white font-semibold text-lg">Estatisticas</Text>
              </Pressable>
              <View className="flex-1 h-[1px] bg-neutral-700 dark:bg-neutral-100" />

            </View>

          </ScrollView>
          <Pressable className="flex-row gap-2 items-center mt-10 bg-red-300/10  px-2 py-4 absolute bottom-10 right-0 w-full">
            <FontAwesome6 name="arrow-right-from-bracket" size={22} color="red" />
            <Text className="text-red-300 font-semibold text-lg">Desconectar</Text>
          </Pressable>
        </View>
      )}
    />
  );
}
