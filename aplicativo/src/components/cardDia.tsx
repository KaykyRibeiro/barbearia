import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Compromisso } from './cardCompromisso';

interface CardDiaProps {
  data: string; // Data no formato YYYY-MM-DD
  compromissos: {
    id: number;
    hora: string;
    titulo: string;
    descricao: string;
    formaPaga: string;
  }[];
}

// Função para formatar a data
function formatarData(data: string): string {
  const [ano, mes, dia] = data.split('-').map(Number);
  const dataFormatada = new Date(ano, mes - 1, dia); // Cria a data
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(dataFormatada); // Exibe no formato desejado
}

export const CardDia = ({ data, compromissos } : CardDiaProps) => {
  return (
    <View className="">
        <View className='w-full flex-row justify-center'>
            <Text 
            className="text-xl font-bold dark:bg-white bg-neutral-900 dark:text-neutral-900 text-white text-center w-8/12 rounded-xl p-2">
              {formatarData(data)}
            </Text>
            
        </View>
      <FlatList
        className='mt-4 w-full'
        data={compromissos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Compromisso
            id={item.id}
            hora={item.hora}
            titulo={item.titulo}
            descricao={item.descricao}
            formaPaga={item.formaPaga}
          />
        )}
      />
    </View>
  );
};
