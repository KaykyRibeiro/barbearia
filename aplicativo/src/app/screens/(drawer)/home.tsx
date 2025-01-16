import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import clsx from 'clsx';

import { CardDia } from '@/src/components/cardDia';
import { Avatar } from '@/src/components/avatar';
import { Navbar } from '@/src/components/navbar';
import { AddServico } from '@/src/components/addServico';

const statusBarHeight = Constants.statusBarHeight;




interface CompromissoData {
  id: number;
  hora: string;
  titulo: string;
  descricao: string;
  formaPaga: string;
}

interface DiaData {
  data: string; // Data no formato YYYY-MM-DD
  compromissos: CompromissoData[];
}

const { width } = Dimensions.get('window'); // Largura total da tela
const CARD_WIDTH = width * 0.90; // Largura de 85% da tela para o card
const CARD_MARGIN = (width - CARD_WIDTH) / 2; // Margem para centralização

const obterDataAtual = () => {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = (hoje.getMonth() + 1).toString().padStart(2, '0'); // Janeiro é 0
  const dia = hoje.getDate().toString().padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
};



export default function Home() {
  const [dias, setDias] = useState<DiaData[]>([]);

  const fetchData = async () => {
    const data: DiaData[] = [
      {
        data: '2025-01-07',
        compromissos: [
          { id: 1, hora: '08:00', titulo: 'Reunião', descricao: 'Discussão do projeto', formaPaga: 'Dinheiro' },
          { id: 2, hora: '10:00', titulo: 'Dentista', descricao: 'Consulta semestral', formaPaga: 'Cartão' },
          { id: 3, hora: '16:00', titulo: 'Dentista', descricao: 'Consulta semestral', formaPaga: 'Cartão' },
          { id: 5, hora: '21:00', titulo: 'Dentista', descricao: 'Consulta semestral', formaPaga: 'Cartão' },
          { id: 6, hora: '21:30', titulo: 'Dentista', descricao: 'Consulta semestral', formaPaga: 'Cartão' },
          { id: 7, hora: '22:00', titulo: 'Dentista', descricao: 'Consulta semestral', formaPaga: 'Cartão' },
        ],
      },
      {
        data: '2025-01-08',
        compromissos: [
          { id: 3, hora: '14:00', titulo: 'Almoço', descricao: 'Com cliente', formaPaga: 'Dinheiro' },
        ],
      },
      {
        data: '2025-01-09',
        compromissos: [
          { id: 3, hora: '14:00', titulo: 'Almoço', descricao: 'Com cliente', formaPaga: 'Dinheiro' },
        ],
      },
      {
        data: '2025-01-10',
        compromissos: [
          { id: 3, hora: '14:00', titulo: 'Almoço', descricao: 'Com cliente', formaPaga: 'Dinheiro' },
        ],
      },
      {
        data: '2025-01-11',
        compromissos: [
          { id: 3, hora: '14:00', titulo: 'Almoço', descricao: 'Com cliente', formaPaga: 'Dinheiro' },
        ],
      },
      {
        data: '2025-01-12',
        compromissos: [
          { id: 3, hora: '14:00', titulo: 'Almoço', descricao: 'Com cliente', formaPaga: 'Dinheiro' },
          { id: 4, hora: '15:00', titulo: 'Almoço', descricao: 'Com cliente', formaPaga: 'Dinheiro' },
        ],
      },
      {
        data: '2025-01-13',
        compromissos: [
          { id: 3, hora: '14:00', titulo: 'Almoço', descricao: 'Com cliente', formaPaga: 'Dinheiro' },
        ],
      },
      {
        data: '2025-01-14',
        compromissos: [
          { id: 3, hora: '14:00', titulo: 'Almoço', descricao: 'Com cliente', formaPaga: 'Dinheiro' },
        ],
      },
      {
        data: '2025-01-15',
        compromissos: [
          { id: 3, hora: '14:00', titulo: 'Almoço', descricao: 'Com cliente', formaPaga: 'Dinheiro' },
        ],
      },
      {
        data: '2025-01-16',
        compromissos: [
          { id: 3, hora: '14:00', titulo: 'Almoço', descricao: 'Com cliente', formaPaga: 'Dinheiro' },
        ],
      },
      {
        data: '2025-01-17',
        compromissos: [
          { id: 3, hora: '14:00', titulo: 'Almoço', descricao: 'Com cliente', formaPaga: 'Dinheiro' },
        ],
      },
      {
        data: '2025-01-18',
        compromissos: [
          { id: 3, hora: '14:00', titulo: 'Almoço', descricao: 'Com cliente', formaPaga: 'Dinheiro' },
        ],
      },
      {
        data: '2025-01-19',
        compromissos: [
          { id: 3, hora: '14:00', titulo: 'Almoço', descricao: 'Com cliente', formaPaga: 'Dinheiro' },
        ],
      },
    ];
    setDias(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const dataAtual = obterDataAtual();
  const diasFuturos = dias.filter((dia) => {
    const dataDia = new Date(dia.data); // Converte a string em objeto Date
    const dataAtualObj = new Date(dataAtual); // Data atual como objeto Date

    // Calcula a diferença em dias
    const diferencaDias = Math.ceil((dataDia.getTime() - dataAtualObj.getTime()) / (1000 * 60 * 60 * 24));

    return diferencaDias >= 0 && diferencaDias <= 6; // Inclui hoje e os próximos 6 dias
  });

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
          className='pb-5'
          horizontal
          pagingEnabled={false}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH} // Centraliza cada card ao parar o scroll
          decelerationRate="fast"
        >
          {diasFuturos.map((dia, index) => (
            <View
              key={index}
              className={clsx(
                ' shadow-md p-3',
                { 'ml-4': index === 0, 'mr-4': index === diasFuturos.length - 1 }
              )}
              style={{
                width: CARD_WIDTH,
                marginLeft: index === 0 ? CARD_MARGIN : 0,
                marginRight: index === diasFuturos.length - 1 ? CARD_MARGIN : 0,
              }}
            >
              <CardDia data={dia.data} compromissos={dia.compromissos} />

            </View>
          ))}
        </ScrollView>
        <AddServico />
      </View>
      <Navbar />
    </View>
  );
}
