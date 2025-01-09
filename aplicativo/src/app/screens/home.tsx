import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import clsx from 'clsx';

import { CardDia } from '@/src/components/cardDia';
import { Avatar } from '@/src/components/avatar';

const statusBarHeight = Constants.statusBarHeight;

interface CompromissoData {
  id: number;
  hora: string;
  titulo: string;
  descricao: string;
}

interface DiaData {
  data: string; // Data no formato YYYY-MM-DD
  compromissos: CompromissoData[];
}

const { width } = Dimensions.get('window'); // Largura total da tela
const CARD_WIDTH = width * 0.90 ; // Largura de 85% da tela para o card
const CARD_MARGIN = (width - CARD_WIDTH) / 2 ; // Margem para centralização

export default function Home() {
  const [dias, setDias] = useState<DiaData[]>([]);

  const fetchData = async () => {
    const data: DiaData[] = [
      {
        data: '2025-01-07',
        compromissos: [
          { id: 1, hora: '08:00', titulo: 'Reunião', descricao: 'Discussão do projeto' },
          { id: 2, hora: '10:00', titulo: 'Dentista', descricao: 'Consulta semestral' },
          { id: 3, hora: '16:00', titulo: 'Dentista', descricao: 'Consulta semestral' },
          { id: 5, hora: '21:00', titulo: 'Dentista', descricao: 'Consulta semestral' },
        ],
      },
      {
        data: '2025-01-08',
        compromissos: [
          { id: 3, hora: '14:00', titulo: 'Almoço', descricao: 'Com cliente' },
        ],
      },
      {
        data: '2025-01-09',
        compromissos: [
          { id: 3, hora: '14:00', titulo: 'Almoço', descricao: 'Com cliente' },
        ],
      },
      {
        data: '2025-01-10',
        compromissos: [
          { id: 3, hora: '14:00', titulo: 'Almoço', descricao: 'Com cliente' },
        ],
      },
    ];
    setDias(data);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <View className="flex-1 bg-neutral-200 dark:bg-neutral-900">
      {/* Header */}
      <View
        className={clsx(
          'w-auto my-5 p-5 flex-row justify-between items-center border-b-4 border-neutral-900 dark:border-neutral-200',
          `mt-[${statusBarHeight + 16}px]`
        )}
      >
        <View className="w-10 h-10 rounded-full bg-black" />
        <TouchableOpacity>
          <Avatar
            source={{ uri: "https://github.com/KaykyRibeiro.png" }}
            size="md"
          />
        </TouchableOpacity>
      </View>

      {/* Conteúdo Principal */}
      <View className="flex-1">
        <ScrollView
          horizontal
          pagingEnabled={false}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH} // Centraliza cada card ao parar o scroll
          decelerationRate="fast"
        >
          {dias.map((dia, index) => (
            <View
              key={index}
              className={clsx(
                ' shadow-md p-3',
                { 'ml-4': index === 0, 'mr-4': index === dias.length - 1 }
              )}
              style={{
                width: CARD_WIDTH,
                marginLeft: index === 0 ? CARD_MARGIN : 0,
                marginRight: index === dias.length - 1 ? CARD_MARGIN : 0,
              }}
            >
              <CardDia data={dia.data} compromissos={dia.compromissos} />

            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
