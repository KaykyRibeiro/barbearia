import React, { useState } from 'react';
import { View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { useLocalSearchParams } from "expo-router";
import DropDownPicker from "react-native-dropdown-picker";

import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useRouter } from "expo-router";
import { Input } from '@/src/components/input';
import { AntDesign } from "@expo/vector-icons";

const statusBarHeight = Constants.statusBarHeight;
export default function DetalhesServico() {
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
      <View className="w-full ml-4" style={{ marginTop: statusBarHeight + 8 }}>
        <TouchableOpacity>
          <Ionicons
            name="arrow-back"
            size={34}
            color={colorScheme === "dark" ? "#FFFFFF" : "#000000"}
            onPress={() => { router.back() }}
          />
        </TouchableOpacity>
      </View>
      <Text className="text-3xl font-medium text-neutral-900 dark:text-neutral-100 text-center">
        Detalhes do Serviço
      </Text>
      {/* linha 1 componentes */}
      <View className='flex-row justify-between items-center m-4 gap-2'>
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
      {/* linha 2 componentes */}
      <View className='flex-row justify-between items-center m-4 gap-2'>
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
          <Text className="w-full text-start text-neutral-950 dark:text-neutral-100 p-2 font-medium text-md ">Horário: </Text>
          <DropDownPicker
            open={open}
            value={valueDrop}
            items={items}
            setOpen={setOpen}
            setValue={setValueDrop}
            setItems={setItems}
            placeholder="Horário"
            multiple={false}
            style={{
              // Estilo para o botão principal
              backgroundColor: colorScheme === "dark" ? "#f5f5f5" : "#171717",
              borderRadius: 20,
              paddingHorizontal: 12,
            }}
            dropDownContainerStyle={{
              // Estilo para o menu suspenso
              backgroundColor: colorScheme === "dark" ? "#f5f5f5" : "#171717",
              borderRadius: 20,
            }}
            textStyle={{
              // Estilo para o texto dentro do botão
              fontSize: 16,
              fontWeight: "600",
              color: "#6B7280",
            }}
            ArrowDownIconComponent={({ style }) => (
              <AntDesign name="down" size={20} color="gray" />
            )}
            ArrowUpIconComponent={({ style }) => (
              <AntDesign name="up" size={20} color="gray" />
            )}
          />
        </View>
      </View>
      <Text className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
        ID do Serviço: {value}
      </Text>
    </View>
  );
}
