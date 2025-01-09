import { useState } from 'react';
import { View, Text, TouchableOpacity, useColorScheme, Pressable } from 'react-native';


import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Constants from 'expo-constants';
import { Input } from '../../components/input';
import { useLocalSearchParams } from "expo-router";


const statusBarHeight = Constants.statusBarHeight;
export default function RecuperacaoEt2() {
  //alert('Se as informações estiverem corretas, você receberá um código em breve.');
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [input, setInput] = useState("");
  // Dentro do componente
  const params = useLocalSearchParams();
  const inputValue = params.value || ""; // Pega o valor ou define como vazio
  console.log("Valor recebido:", inputValue);

  const validateCode = (code: string) => {
    const cleanCode = code.replace(/\s/g, ""); // Remove espaços
    return /^\d{6}$/.test(cleanCode);
  };

  const identificar = () => {
    if (validateCode(input)) {
      router.push("//recuperacaoEt3");
    }else{
      alert('Código inválido');
      router.push("//recuperacaoEt3");
    }
  };

  const reenviarCode = () => {
    console.log(`Reenviando código para: ${inputValue}`);
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
        <View className='flex-row items-center bg-neutral-200 p-4 rounded-full gap-2'>
          <Text className="text-neutral-950  font-medium text-3xl">Código enviado com sucesso!</Text>
          <Ionicons name="checkmark-circle-outline" size={34} color="black"></Ionicons>
        </View>

        <Text className="text-neutral-950 dark:text-neutral-100 font-medium text-lg mx-5 text-center">
          Preencha o campo abaixo com o código enviado para o seu e-mail ou Telefone.
        </Text>
      </View>
      <View className="flex-1 max-h-48"></View>
      <View className=" flex-1 flex-col items-center justify-between gap-y-10 mb-12">
        <View className="w-10/12  ">
          <Input>
            <Input.Field
              placeholder="Ensira o Código"
              style={{ width: "100%" }}
              value={input}
              onChangeText={setInput}
              keyboardType="default"
            />
          </Input>
          <View className='flex-row justify-end'>
            <Pressable
              className="w-4/12 items-center justify-center bg-neutral-950 text-neutral-100 rounded-full mt-4 h-12"
              onPress={reenviarCode}
            >
              <Text className="text-neutral-100 font-light text-md">Reenviar código</Text>
            </Pressable>
          </View>
        </View>
        <View className='w-full flex-row justify-center'>
          <Pressable
            className="w-8/12 items-center justify-center bg-neutral-950 text-neutral-100 rounded-full mt-4 h-12"
            onPress={identificar}
          >
            <Text className="text-neutral-100 font-light text-3xl">Confirmar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}