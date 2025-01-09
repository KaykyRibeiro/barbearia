import React from 'react';
import { View, Text } from 'react-native';

interface CompromissoProps {
  hora: string; // Define que o horário é uma string
  titulo: string; // Define que o título é uma string
  descricao: string; // Define que a descrição é uma string
}

// Função para determinar o período com base no horário
function determinarPeriodo(hora: string): string {
  const [horas] = hora.split(":").map(Number);
  if (horas >= 6 && horas < 12) return "Manhã";
  if (horas >= 12 && horas < 18) return "Tarde";
  return "Noite";
}

export const Compromisso = ({ hora, titulo, descricao }: CompromissoProps) => {
  const periodo = determinarPeriodo(hora); // Determina o período com base no horário

  return (
    <View className="mb-4">
      <View className="w-full mb-2">
        <View className="flex-1 h-[1px] bg-gray-400" /> {/* Traço à esquerda */}
        <Text className="text-lg font-normal text-center text-neutral-700 dark:text-neutral-300">
          {hora} da {periodo}
        </Text>
      </View>

      <View className="bg-neutral-900 dark:bg-white p-4 rounded-lg shadow-lg m-2">
        <Text className="text-xl font-semibold text-white dark:text-neutral-900">
          {titulo}
        </Text>
        <Text className="text-gray-400 dark:text-gray-600">{descricao}</Text>
      </View>
    </View>
  );
};
