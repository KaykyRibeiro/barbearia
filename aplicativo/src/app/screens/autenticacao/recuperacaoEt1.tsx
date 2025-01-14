import { useState } from "react";
import { View, Text, TouchableOpacity, Pressable, Alert } from "react-native"

import { Ionicons } from "@expo/vector-icons"
import Constants from 'expo-constants';
import { useRouter } from "expo-router";
import { useColorScheme } from "react-native";
import { Input } from "@/src/components/input";



const statusBarHeight = Constants.statusBarHeight;

export default function RecuperacaoEt1() {
    const colorScheme = useColorScheme();
    const router = useRouter();
    const [input, setInput] = useState("");

    //ta validando o telefone nacional e internacional
    const validatePhone = (phone: string) => {
        const cleanPhone = phone.replace(/\s|-/g, ""); // Remove espaços e traços
        return /^\+?[1-9]\d{1,12}$/.test(cleanPhone);
    };
    const identificar = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valida formato de e-mail

        if (emailRegex.test(input)) {
            //try {
            //    const response = await fetch('https://suaapi.com/check-user', {
            //        method: 'POST',
            //        headers: {
            //            'Content-Type': 'application/json',
            //        },
            //        body: JSON.stringify({ input }),
            //    });

            //   const result = await response.json();

            //    if (result.success) {
            sendCodeEmail(input);
            //    } else {
            //        router.push("/recuperacaoEt2");
            //    }
            //} catch (error) {
            //    console.error("Erro ao verificar email ou telefone:", error);
            //    return false;
            //}

        } else if (validatePhone(input)) {
            //try {
            //    const response = await fetch('https://suaapi.com/check-user', {
            //        method: 'POST',
            //        headers: {
            //            'Content-Type': 'application/json',
            //        },
            //        body: JSON.stringify({ input }),
            //    });

            //   const result = await response.json();

            //    if (result.success) {
                    sendCodeTelefone(input);
            //    } else {
            //        router.push("/recuperacaoEt2");
            //    }
            //} catch (error) {
            //    console.error("Erro ao verificar email ou telefone:", error);
            //    return false;
            //}
        } else {
            Alert.alert("Formato inválido");
        }
    }

    const sendCodeEmail = (email: string) => {
        console.log(`Enviando código para o e-mail: ${email}`);
        router.push(`//recuperacaoEt2?value=${input}`);
    }

    const sendCodeTelefone = (phone: string) => {
        console.log(`Enviando código para o telefone: ${phone}`);
        router.push(`//recuperacaoEt2?value=${input}`);
    }

    return (
        <View className="flex-1 bg-neutral-200 dark:bg-neutral-900">
            <View className="w-full ml-4" style={{ marginTop: statusBarHeight + 8 }}>
                <TouchableOpacity>
                    <Ionicons
                        name="arrow-back"
                        size={34}
                        color={colorScheme === "dark" ? "#FFFFFF" : "#000000"}
                        onPress={() => { router.back() }}
                    />
                </TouchableOpacity>
            </View>
            <View className="w-full items-center gap-4" style={{ marginTop: statusBarHeight + 8 }}>
                <Text className="text-neutral-950 dark:text-neutral-100 font-semibold text-5xl">Recuperação</Text>
                <Text className="text-neutral-950 dark:text-neutral-100 font-medium text-lg mx-5 text-center">
                    Preencha os campos abaixo e você receberá um código em seu e-mail ou Telefone.
                </Text>
            </View>
            <View className="flex-1 max-h-48"></View>
            <View className=" flex-1 flex-col items-center justify-between gap-y-10 mb-12">
                <View className="w-10/12 bg-neutral-500 rounded-3xl pb-2" >
                    <Input>
                        <Input.Field
                            placeholder="E-mail ou Telefone"
                            style={{ width: "100%" }}
                            value={input}
                            onChangeText={setInput}
                            keyboardType="default"
                        />
                    </Input>
                    <Text className="w-full text-center text-neutral-950 dark:text-neutral-100 p-2 font-medium text-md ">Um código de recuperação será enviado para esse e-mail ou Telefone</Text>
                </View>
                <View className="w-8/12 flex justify-center items-center">
                    <Text className="text-neutral-950 dark:text-neutral-100 font-medium text-md text-center">
                        Caso não tenha acesso ao e-mail ou telefone cadastrado, entre em contado com o nosso {<Pressable><Text className="text-blue-900 dark:text-blue-300 font-medium text-md">atendimento</Text></Pressable>}
                    </Text>
                </View>
                <Pressable
                    className="w-8/12 items-center justify-center bg-neutral-950 text-neutral-100 rounded-full mt-4 h-12"
                    onPress={identificar}
                >
                    <Text className="text-neutral-100 font-light text-3xl">Enviar</Text>
                </Pressable>
            </View>
        </View>
    )
}