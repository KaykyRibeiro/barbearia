import React, { useState } from 'react';
import { View, Text, TouchableOpacity, useColorScheme, Platform } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "react-native-modal-datetime-picker";
import { format } from "date-fns";


import { Ionicons } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Constants from 'expo-constants';
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Pressable, TextInput } from 'react-native-gesture-handler';


const statusBarHeight = Constants.statusBarHeight;
export default function CadastrarServico() {
  const colorScheme = useColorScheme();
  const router = useRouter();


  const [open, setOpen] = useState(false); // Controla se o drop-down está aberto
  const [openServico, setOpenServico] = useState(false); // Controla se o drop-down está aberto
  const [valueDrop, setValueDrop] = useState<string | null>(null); // Armazena o valor selecionado
  const [value, setValue] = useState<string[] | null>([]); // Armazena o valor selecionado
  const [items, setItems] = useState([
    { label: "11:00", value: "11:00" },
    { label: "11:30", value: "11:30" },
    { label: "12:00", value: "12:00" },
  ]);

  const [itemsServico, setItemsServico] = useState([
    { label: "corte", value: "corte" },
    { label: "barba", value: "barba" },
    { label: "sobrancelha", value: "sobrancelha" },
  ]);


  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (selectedDate: any) => {
    setDate(selectedDate || date); // Atualiza a data escolhida
    hideDatePicker();
  };

  const [valueMonetario, setValueMonetario] = useState<string>("");

  const handleValueChange = (text: string) => {
    // Remove todos os caracteres que não são números
    const numericValue = text.replace(/\D/g, "");

    // Formata para o formato monetário BRL
    const formattedValue = Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(parseFloat(numericValue) / 100); // Dividir por 100 para adicionar a vírgula decimal

    setValueMonetario(formattedValue); // Atualiza o valor formatado

  };


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
        Adicionar serviço
      </Text>
      {/* linha 1 componentes */}
      <View className='flex-row justify-between items-center mx-4 mt-8 gap-2'>
        <View className="w-7/12" >
          <Text className="w-full text-start text-neutral-950 dark:text-neutral-100 p-2 font-medium text-md ">Cliente: </Text>
          <TextInput
            className='bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-950 rounded-3xl px-4 py-4 h-14 text-lg font-semibold'
            placeholder='Digite o nome do cliente'
            placeholderTextColor={"#6B7280"}
          />
        </View>
        <View className="w-4/12" >
          <Text className="w-full text-start text-neutral-950 dark:text-neutral-100 p-2 font-medium text-md ">Data: </Text>
          <TouchableOpacity
            className="px-4 py-2 bg-neutral-900 dark:bg-neutral-100 rounded-3xl h-14 flex-row justify-between items-center gap-2"
            onPress={showDatePicker}
          >
            <Text className="text-neutral-100 dark:text-neutral-950 font-medium text-lg">
              {format(date, "dd/MM/yyyy")}
            </Text>
            <Fontisto name="date" size={20} color={colorScheme === "dark" ? "#000" : "#fff"} />
          </TouchableOpacity>

          {/* Date Picker */}
          <DateTimePicker
            isVisible={isDatePickerVisible}
            mode="date" // Escolha "date", "time" ou "datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </View>

      {/* linha 2 componentes */}
      <View className='flex-row justify-between items-center mx-4 gap-2'>
        <View className="w-6/12" >
          <Text className="w-full text-start text-neutral-950 dark:text-neutral-100 p-2 font-medium text-md ">Telefone: </Text>
          <TextInput
            className='bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-950 rounded-3xl px-4 py-4 h-14 text-lg font-semibold'
            placeholder='Digite o telefone'
            placeholderTextColor={"#6B7280"}
          />
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
            placeholderStyle={{
              color: '#6B7280', // Cor do texto do placeholder
              fontSize: 16,
            }}
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
              color: colorScheme === "dark" ? "#000" : "#fff",
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

      {/* linha 3 componentes */}
      <View className='flex-row justify-between items-center mx-4 gap-2'>
        <View className="w-7/12" >
          <Text className="w-full text-start text-neutral-950 dark:text-neutral-100 p-2 font-medium text-md ">Observação: </Text>
          <DropDownPicker
            open={openServico}
            value={value}
            items={itemsServico}
            setOpen={setOpenServico}
            setValue={setValue}
            setItems={setItemsServico}
            placeholder="Serviços"
            placeholderStyle={{
              color: '#6B7280', // Cor do texto do placeholder
              fontSize: 16,
            }}
            multiple={true}
            min={0}
            showTickIcon={true} // Exibir o ícone de seleção
            mode="BADGE" // Exibir selecionados no campo de input
            badgeTextStyle={{
              fontSize: 12,
            }}
            badgeColors={colorScheme === "dark" ? "#fff" : "#000"} // Fundo das badges
            badgeStyle={{
              paddingHorizontal: 5,
            }}
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
              color: colorScheme === "dark" ? "#000" : "#fff",
            }}
            ArrowDownIconComponent={({ style }) => (
              <AntDesign name="down" size={20} color={colorScheme === "dark" ? "#000" : "#fff"} />
            )}
            ArrowUpIconComponent={({ style }) => (
              <AntDesign name="up" size={20} color={colorScheme === "dark" ? "#000" : "#fff"} />
            )}
          />
        </View>
        <View className="w-4/12" >
          <Text className="w-full text-start text-neutral-950 dark:text-neutral-100 p-2 font-medium text-md ">Valor: </Text>
          <TextInput
            className='bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-950 rounded-3xl px-4 py-4 h-14 text-lg font-semibold'
            placeholder='Digite o valor'
            placeholderTextColor={"#6B7280"}
            keyboardType='numeric'
            value={valueMonetario} // Exibe o valor formatado
            onChangeText={handleValueChange} // Formata ao digitar
          />
        </View>
      </View>

      <View className='flex-1 flex-row items-end justify-center my-20'>
        <View className='bg-black dark:bg-white px-4 py-3 rounded-full w-6/12'>
          <Pressable className='w-auto'>
            <Text className="text-center text-2xl text-white dark:text-neutral-950 font-semibold">Agendar</Text>
          </Pressable>
        </View>

      </View>
    </View>
  );
}
