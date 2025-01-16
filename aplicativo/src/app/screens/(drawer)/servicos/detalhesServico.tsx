import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from "expo-router";

export default function DetalhesServico() {
  const { value } = useLocalSearchParams(); // Captura o parâmetro "value"

  return (
    <View className="flex-1 items-center justify-center bg-neutral-200 dark:bg-neutral-900">
      <Text className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
        Detalhes do Serviço
      </Text>
      <Text className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
        ID do Serviço: {value}
      </Text>
    </View>
  );
}
