import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { TouchableOpacity, useColorScheme, View, Text, Pressable, Alert } from 'react-native';

import Constants from 'expo-constants';
import { useRouter } from 'expo-router';
import { Input } from '../../../components/input';

const statusBarHeight = Constants.statusBarHeight;
export default function RecuperacaoEt3() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const [inputNewSenha, setinputNewSenha] = useState("");
    const [inputConfirmSenha, setinputConfirmSenha] = useState("");
    const [hidePass1, setHidePass1] = useState(true);
    const [hidePass2, setHidePass2] = useState(true);

    const verificaSenhas = async () => {
        if (inputNewSenha === inputConfirmSenha) {
            await Alert.alert("Senha auterada com sucesso");
            router.push("./autenticacao/login");
        } else {
            Alert.alert("Senhas não coincidem");
        }
    };

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
                <View className='flex-row items-center bg-neutral-200 p-3 rounded-full '>
                    <Text className="text-neutral-950  font-medium text-3xl">Redefinição de senha</Text>
                </View>

                <Text className="text-neutral-950 dark:text-neutral-100 font-medium text-lg mx-5 text-center">
                    Preencha o campo abaixo com o código enviado para o seu e-mail ou Telefone.
                </Text>
            </View>
            <View className="flex-1 max-h-48"></View>
            <View className="flex-row items-center justify-evenly  bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-950 rounded-full mx-12 mb-5">
                <View className="w-10/12">
                    <Input>
                        <Input.Field
                            placeholder="Nova senha"
                            style={{ width: "100%" }}
                            secureTextEntry={hidePass1}
                            value={inputNewSenha}
                            onChangeText={(texto) => setinputNewSenha(texto)}
                        />
                    </Input>
                </View>

                <TouchableOpacity className="w-2/12 pl-4" onPress={() => setHidePass1(!hidePass1)}>
                    {hidePass1 ? (
                        <Ionicons name="eye-off-outline" size={30} color={"#6B7280"} />
                    ) : (
                        <Ionicons name="eye-outline" size={30} color={"#6B7280"} />
                    )}
                </TouchableOpacity>
            </View>
            <View className="flex-row items-center justify-evenly  bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-950 rounded-full mx-12">
                <View className="w-10/12">
                    <Input>
                        <Input.Field
                            placeholder="Confirmar nova senha"
                            style={{ width: "100%" }}
                            secureTextEntry={hidePass2}
                            onChangeText={(texto) => setinputConfirmSenha(texto)}
                        />
                    </Input>
                </View>

                <TouchableOpacity className="w-2/12 pl-4" onPress={() => setHidePass2(!hidePass2)}>
                    {hidePass2 ? (
                        <Ionicons name="eye-off-outline" size={30} color={"#6B7280"} />
                    ) : (
                        <Ionicons name="eye-outline" size={30} color={"#6B7280"} />
                    )}
                </TouchableOpacity>
            </View>
            <View className='flex-1 items-center justify-end pb-14'>
                <Pressable className="w-7/12 items-center justify-center bg-neutral-950 text-neutral-100 rounded-full mt-4 h-12" onPress={verificaSenhas}>
                    <Text className="text-neutral-100 font-normal text-3xl">Confirmar</Text>
                </Pressable>
            </View>

        </View>
    );
}