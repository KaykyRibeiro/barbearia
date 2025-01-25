import React, { useState } from 'react';
import { View, Text, TouchableOpacity, useColorScheme, Pressable } from 'react-native';
import { useLocalSearchParams } from "expo-router";
import DropDownPicker from "react-native-dropdown-picker";

import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useRouter } from "expo-router";
import { Input } from '@/src/components/input';


const statusBarHeight = Constants.statusBarHeight;
export default function DetalhesPesquisa() {
  const { value } = useLocalSearchParams(); // Captura o parâmetro "value"
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [input, setInput] = useState("");

  const [open, setOpen] = useState(false); // Controla se o drop-down está aberto
  const [valueDrop, setValueDrop] = useState<string | null>(null); // Armazena o valor selecionado
  const [items, setItems] = useState([
    { label: "11:00", value: "11:00" },
    { label: "11:30", value: "11:30" },
    { label: "12:00", value: "12:00" },
  ]);

  return (
    <View className="flex-1  bg-neutral-200 dark:bg-neutral-900">
      <View className="w-full ml-4" style={{ marginTop: statusBarHeight + 16 }}>
        <TouchableOpacity>
          <Ionicons
            name="arrow-back"
            size={34}
            color={colorScheme === "dark" ? "#FFFFFF" : "#000000"}
            onPress={() => { router.push("/screens/(drawer)/pesquisa") }}
          />
        </TouchableOpacity>
      </View>
      <Text className="text-3xl font-medium text-neutral-900 dark:text-neutral-100 text-center mt-10">
        Detalhes do Serviço Pesquisado
      </Text>
      {/* linha 1 componentes */}
      <View className='flex-row justify-between items-center mx-4 gap-2 mt-10'>
        <View className="w-7/12" >
          <Text className="w-full text-start text-neutral-950 dark:text-neutral-100 p-2 font-medium text-md ">Cliente: </Text>
          <Input>
            <Input.Field
              placeholder="Nome"
              style={{ width: "100%" }}
              value={input}
              onChangeText={setInput}
              keyboardType="default"
              editable={false}
            />
          </Input>
        </View>
        <View className="w-4/12" >
          <Text className="w-full text-start text-neutral-950 dark:text-neutral-100 p-2 font-medium text-md ">Data: </Text>
          <Input>
            <Input.Field
              placeholder="Data"
              style={{ width: "100%" }}
              value={input}
              onChangeText={setInput}
              keyboardType="default"
              editable={false}
            />
          </Input>
        </View>
      </View>
      {/* linha 2 componentes */}
      <View className='flex-row justify-between items-center mx-4 gap-2'>
        <View className="w-6/12" >
          <Text className="w-full text-start text-neutral-950 dark:text-neutral-100 p-2 font-medium text-md ">Telefone: </Text>
          <Input>
            <Input.Field
              placeholder="Telefone"
              style={{ width: "100%" }}
              value={input}
              onChangeText={setInput}
              keyboardType="default"
              editable={false}
            />
          </Input>
        </View>
        <View className="w-5/12" >
        <Text className="w-full text-start text-neutral-950 dark:text-neutral-100 p-2 font-medium text-md ">Hora: </Text>
          <Input>
            <Input.Field
              placeholder="Hora"
              style={{ width: "100%" }}
              value={input}
              onChangeText={setInput}
              keyboardType="default"
              editable={false}
            />
          </Input>
        </View>
      </View>
      {/* linha 3 componentes */}
      <View className='flex-row justify-between mx-4 gap-2'>
        <View className="w-7/12" >
          <Text className="w-full text-start text-neutral-950 dark:text-neutral-100 p-2 font-medium text-md ">Descrição do Serviço: </Text>
          <Input>
            <Input.Field
              placeholder="Descrição serviço"
              style={{ 
                width: "100%",
                height: 100,
                borderRadius: 30,
               }}
              value={input}
              onChangeText={setInput}
              keyboardType="default"
              editable={false}
              multiline={true} // Permite múltiplas linhas
              numberOfLines={4}
            />
          </Input>
        </View>
        <View className="w-4/12" >
        <Text className="w-full text-start text-neutral-950 dark:text-neutral-100 p-2 font-medium text-md ">Valor: </Text>
          <Input>
            <Input.Field
              placeholder="Valor"
              style={{ width: "100%" }}
              value={input}
              onChangeText={setInput}
              keyboardType="default"
              editable={false}
            />
          </Input>
        </View>
      </View>
    </View>
  );
}
