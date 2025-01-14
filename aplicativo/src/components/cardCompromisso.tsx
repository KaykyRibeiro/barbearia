import React from 'react';
import { useRouter } from 'expo-router';

import { View, Text, Pressable } from 'react-native';

interface CompromissoProps {
  id: number;
  hora: string; // Define que o horário é uma string
  titulo: string; // Define que o título é uma string
  descricao: string; // Define que a descrição é uma string
  formaPaga: string;
}

// Função para determinar o período com base no horário
function determinarPeriodo(hora: string): string {
  const [horas] = hora.split(":").map(Number);
  if (horas >= 6 && horas < 12) return "Manhã";
  if (horas >= 12 && horas < 18) return "Tarde";
  return "Noite";
}



export const Compromisso = ({ id, hora, titulo, descricao, formaPaga }: CompromissoProps) => {
  const periodo = determinarPeriodo(hora); // Determina o período com base no horário
  const router = useRouter();

  return (
    <View className="mb-4">
      {/* Linha com traço e texto centralizado */}
      <View className="flex-row items-center mb-4">
        {/* Traço à esquerda */}
        <View className="flex-1 h-[1px] bg-neutral-700 dark:bg-neutral-100" />
        {/* Texto centralizado */}
        <Text className="mx-4 text-lg font-normal text-neutral-700 dark:text-neutral-300">
          {hora} da {periodo}
        </Text>
        {/* Traço à direita */}
        <View className="flex-1 h-[1px] bg-neutral-700 dark:bg-neutral-100" />
      </View>

      <Pressable onPress={() => {router.push(`/screens/detalhes/detalhesServico?value=${id}`)}}>
        <View className="bg-neutral-900 dark:bg-white p-4 rounded-lg shadow-lg m-2">
          <Text className="text-xl font-semibold text-white dark:text-neutral-900">
            {titulo}
          </Text>
          <Text className="text-gray-400 dark:text-gray-600">{descricao}</Text>
          <Text className="font-semibold text-green-400 dark:text-green-600">{formaPaga}</Text>
        </View>
      </Pressable>

    </View>
  );
};
