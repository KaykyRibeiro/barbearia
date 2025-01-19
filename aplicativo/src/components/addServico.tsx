import { AntDesign } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import { useRouter } from 'expo-router';

export function AddServico() {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => {router.push('./servicos/cadastrarServico')}} 
      className="w-14 h-14 bg-black rounded-2xl absolute bottom-8 right-8 flex items-center justify-center">
        <AntDesign name="plus" size={40} color="white" />
    </Pressable>
  );
}