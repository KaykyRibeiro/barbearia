import { useEffect, useState } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

// Função fictícia que simula a consulta ao banco de dados

import axios from 'axios';
import React from "react";
//const axios = require('axios'); // legacy way

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });

const database = {
    users: [
        { id: 3, name: "Kaique", email: "kaique@example.com" },
        { id: 2, name: "Maria", email: "maria@example.com" },
    ],
};

export default function Index() {

    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const checkLogin = async () => {
            try {
                // Obtém o ID do usuário armazenado
                const userId = await AsyncStorage.getItem("userId");
                await AsyncStorage.setItem("userId", "3");
                //await AsyncStorage.removeItem("userId");


                if (userId) {
                    // Se houver ID armazenado, verifica se o usuário está logado
                    const user = database.users.find((u) => u.id === parseInt(userId));

                    if (user) {
                        // Se o usuário estiver logado, redireciona para a tela principal
                        console.log(user);
                        router.push('/screens/home');
                    } else {
                        // Se o usuário não estiver logado, redireciona para login
                        router.push("./autenticacao/login");
                    }

                } else {
                    // Não há ID armazenado, redireciona para login
                    router.push("./autenticacao/login");
                }
            } catch (error) {
                console.error("Erro ao verificar o login:", error);
            } finally {
                setLoading(false); // Finaliza o carregamento
            }
        };

        checkLogin();
    }, []);

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center bg-neutral-200 dark:bg-neutral-900">
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Carregando...</Text>
            </View>
        );
    }

    return null;
}