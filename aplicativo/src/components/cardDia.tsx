import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Compromisso } from './cardCompromisso';

interface CardDiaProps {
    data: string;
    compromissos: {
        id: number;
        hora: string;
        titulo: string;
        descricao: string;
    }[];
}
export const CardDia = ({ data, compromissos } : CardDiaProps) => {
  return (
    <View className="">
        <View className='w-full flex-row justify-between'>
            <Text className='text-3xl dark:text-white text-neutral-900'></Text> 
            <Text className="text-2xl font-bold dark:bg-white bg-neutral-900 text-center w-6/12 rounded-xl py-1">{data}</Text>
            <Text className='text-3xl dark:text-white text-neutral-900'>-</Text> 
        </View>
      <FlatList
        className='mt-4 w-full'
        data={compromissos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Compromisso
            hora={item.hora}
            titulo={item.titulo}
            descricao={item.descricao}
          />
        )}
      />
    </View>
  );
};
