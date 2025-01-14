import React, { useState } from "react";
import { View, Text, TouchableOpacity, Pressable, Alert } from "react-native";

import { useRouter } from "expo-router";
import { Input } from "@/src/components/input";
import { Ionicons } from '@expo/vector-icons';
export default function Home() {
    const router = useRouter();
    const [input, setInput] = useState("");
    const [hidePass, setHidePass] = useState(true);


    return (
        <View className="flex-1 bg-neutral-200 dark:bg-neutral-900">
            <View className="flex-1 items-center justify-center gap-4">
                <View className="flex-row justify-between w-10/12 items-center">
                    <Text className="text-neutral-950 dark:text-neutral-100 font-semibold text-5xl">Login</Text>
                    <View className="w-6/12">
                        <Input>
                            <Input.Field placeholder="Código da barbearia" style={{ width: "100%" }} />
                        </Input>
                    </View>

                </View>
                <View className="w-10/12">
                    <Input>
                        <Input.Field placeholder="E-mail ou Telefone" style={{ width: "100%" }} />
                    </Input>
                </View>
                <View className="w-10/12 flex-row items-center justify-evenly  bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-950 rounded-full">
                    <View className="w-10/12">
                        <Input>
                            <Input.Field
                                placeholder="Senha"
                                style={{ width: "100%" }}
                                secureTextEntry={hidePass}
                                value={input}
                                onChangeText={(texto) => setInput(texto)}
                            />
                        </Input>
                    </View>

                    <TouchableOpacity className="w-2/12 pl-4" onPress={() => setHidePass(!hidePass)}>
                        {hidePass ? (
                            <Ionicons name="eye-off-outline" size={30} color={"#6B7280"} />
                        ) : (
                            <Ionicons name="eye-outline" size={30} color={"#6B7280"} />
                        )}
                    </TouchableOpacity>


                </View>
                <View className="w-10/12 flex-row items-center justify-end">
                    <TouchableOpacity onPress={() => router.push("./recuperacaoEt1")}>
                        <Text className="text-blue-900 dark:text-blue-300 font-medium text-md">Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                </View>
                <Pressable className="w-7/12 items-center justify-center bg-neutral-950 text-neutral-100 rounded-full mt-4 h-12">
                    <Text className="text-neutral-100 font-light text-2xl">Entrar</Text>
                </Pressable>
            </View>
            <View className="position-absolute bottom-0 flex-row items-center justify-between mx-4 h-auto">
                <View className="flex-col items-start justify-center my-5">
                    <Text className="text-neutral-400 font-medium text-xs">Contato:</Text>
                    <Text className="text-neutral-400 font-medium text-xs">12 99755-9353</Text>
                </View>
                <View className="flex-col items-center justify-center">
                    <View className="flex-row items-center justify-center divide-y">
                        <TouchableOpacity>
                            <Text className="text-neutral-400 font-medium text-sm">Politica de privacidade</Text>
                        </TouchableOpacity>
                        <Text className="text-neutral-400 font-light text-lg"> | </Text>
                        <TouchableOpacity>
                            <Text className="text-neutral-400 font-medium text-sm">Termos de uso</Text>
                        </TouchableOpacity>
                    </View>
                    <Text className="text-neutral-400 font-medium text-xs">Copyright © 2025</Text>
                </View>
                <View>
                    <Text className="text-neutral-400 font-medium text-xs">Versão:</Text>
                    <Text className="text-neutral-400 font-medium text-sm">1.0.0</Text>
                </View>
            </View>


        </View>

    );
}
