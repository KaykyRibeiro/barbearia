import { Pressable, Text } from 'react-native';

import Foundation from '@expo/vector-icons/Foundation';
export default function HomeButton() {
 return (
    <Pressable className="mr-2 flex-col items-center justify-center">
      <Foundation name="home" size={34} color="white" />
      <Text className='text-white'>Inicio</Text>
    </Pressable>
  );
}