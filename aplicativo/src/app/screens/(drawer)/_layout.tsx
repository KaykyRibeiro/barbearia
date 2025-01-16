import React from "react";
import { Alert, Text, View, TouchableOpacity, Pressable } from "react-native";
import { Drawer } from "expo-router/drawer";
import { Avatar } from "@/src/components/avatar";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ScrollView } from "react-native-gesture-handler";

export default function Layout() {
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
              <AntDesign name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <ScrollView>
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
          </ScrollView>
        </View>
      )}
    />
  );
}
