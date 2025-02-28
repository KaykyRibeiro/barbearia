import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

import React from 'react';

type CardPesquisaProps = {
  id: number;
  cli_name: string; // Nome do cliente
  service_desc: string; // Descrição do serviço
  service_pag: string; // Forma de pagamento
};

export function CardPesquisa({ id, cli_name, service_desc, service_pag }: CardPesquisaProps) {
  const router = useRouter();
  return (
    <Pressable
      className="flex-row justify-between mt-4 w-12/12 h-28 bg-neutral-900 dark:bg-white p-4 rounded-xl shadow-lg m-2"
      onPress={() => { router.push(`/screens/(drawer)/servicos/detalhesPesquisa?value=${id}`) }}>
      <View className="flex-col">
        <Text className="text-3xl font-bold text-white dark:text-neutral-900">
          {cli_name}
        </Text>
        <Text className="text-neutral-300 dark:text-neutral-700 font-medium text-lg">{service_desc}</Text>

      </View>
      <View className='flex-col justify-between items-end'>
        <Text className="font-bold text-green-400 dark:text-green-600 text-2xl">{service_pag}</Text>
        {/* <Text className="font-semibold text-green-400 dark:text-green-600 text-xl">{status}</Text> */}
      </View>
    </Pressable>
  );
}