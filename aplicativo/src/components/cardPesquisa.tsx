import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

type CardPesquisaProps = {
  id: number;
  hora: string; // Define que o horário é uma string
  titulo: string; // Define que o título é uma string
  descricao: string; // Define que a descrição é uma string
  formaPaga: string;
  status: string;
};

export function CardPesquisa({ ...res }: CardPesquisaProps) {
  const router = useRouter();
  return (
    <Pressable
      className="flex-row justify-between mt-4 w-12/12 h-28 bg-neutral-900 dark:bg-white p-4 rounded-xl shadow-lg m-2"
      onPress={() => { router.push(`/screens/(drawer)/servicos/detalhesPesquisa?value=${res.id}`) }}>
      <View className="flex-col">
        <Text className="text-3xl font-bold text-white dark:text-neutral-900">
          {res.titulo}
        </Text>
        <Text className="text-neutral-300 dark:text-neutral-700 font-medium text-lg">{res.descricao}</Text>

      </View>
      <View className='flex-col justify-between items-end'>
        <Text className="font-bold text-green-400 dark:text-green-600 text-2xl">{res.formaPaga}</Text>
        <Text className="font-semibold text-green-400 dark:text-green-600 text-xl">{res.status}</Text>
      </View>
    </Pressable>
  );
}