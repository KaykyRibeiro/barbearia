import { Pressable, Text } from 'react-native';
import { useRouter } from "expo-router";

import Foundation from '@expo/vector-icons/Foundation';
export default function HomeButton() {
  const router = useRouter();
 return (
    <Pressable 
      className="mr-2 flex-col items-center justify-center"
      onPress={() => {router.push("./home")}}
    >
      <Foundation name="home" size={34} color="white" />
      <Text className='text-white'>Inicio</Text>
    </Pressable>
  );
}