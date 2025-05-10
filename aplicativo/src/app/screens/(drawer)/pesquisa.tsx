import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, useColorScheme } from 'react-native';
import Constants from 'expo-constants';
import clsx from 'clsx';
import { colorScheme } from 'nativewind';

import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "react-native-modal-datetime-picker";
import { format } from "date-fns";

import { Navbar } from '@/src/components/navbar';
import { CardPesquisa } from '@/src/components/cardPesquisa';

import AntDesign from '@expo/vector-icons/AntDesign';
import { Fontisto } from '@expo/vector-icons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import { useEffect } from 'react';

const statusBarHeight = Constants.statusBarHeight;

type Service = {
  id: number;
  cli_name: string;
  service_desc: string;
  service_pag: string;
};

export default function Pesquisa() {

  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch('http://192.168.1.3:3000/api/services'); // Use o IP local da sua máquina
        if (!response.ok) {
          throw new Error(`Erro ao buscar serviços: ${response.status}`);
        }
        const data: Service[] = await response.json(); // Converte para JSON
        setServices(data);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchServices();
  }, []);

  const colorScheme = useColorScheme();
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (selectedDate: any) => {
    setDate(selectedDate || date); // Atualiza a data escolhida
    hideDatePicker();
  };

  const [open, setOpen] = useState(false); // Controla se o drop-down está aberto
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState([
    { label: "Finalizado", value: "finalizado" },
    { label: "Cancelado", value: "cancelado" },
  ]);
  return (
    <View className="flex-1 bg-neutral-200 dark:bg-neutral-900">
      <View className={clsx('flex-1 items-center w-12/12 ', { 'mt-20': statusBarHeight })}>
        <Text className='text-3xl font-medium text-neutral-900 dark:text-neutral-100'>Pesquisa</Text>
        <Text className='text-lg font-medium text-neutral-900 dark:text-neutral-100'>Procure por serviços antigos realizados ou cancelados</Text>
        <View className='flex-row justify-between items-end gap-6 mt-20 w-11/12 mr-4 '>
          <View className='flex-col justify-start items-start w-6/12'>
            <Text className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>Pesquise por nome de cliente:</Text>
            <View className='flex-row bg-neutral-900 dark:bg-neutral-100 rounded-2xl px-4 items-center w-full'>
              <TextInput className='text-neutral-100 dark:text-neutral-950 text-lg w-10/12' />
              <AntDesign name="search1" size={28} color={colorScheme === "dark" ? "#000" : "#fff"} />
            </View>
          </View>

          <View className='flex-row justify-between items-center w-6/12 gap-2'>
            <TouchableOpacity
              className="px-4 py-2 bg-neutral-900 dark:bg-neutral-100 rounded-2xl h-14 justify-center"
              onPress={showDatePicker}
            >
              <Fontisto name="date" size={22} color={colorScheme === "dark" ? "#000" : "#fff"} />
            </TouchableOpacity>

            {/* Date Picker */}
            <DateTimePicker
              isVisible={isDatePickerVisible}
              mode="date" // Escolha "date", "time" ou "datetime"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />

            <View className="w-8/12" >
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Filtrar"
                placeholderStyle={{
                  color: '#6B7280', // Cor do texto do placeholder
                  fontSize: 16,
                }}
                multiple={false}
                style={{
                  // Estilo para o botão principal
                  backgroundColor: colorScheme === "dark" ? "#f5f5f5" : "#171717",
                  borderRadius: 15,
                  paddingHorizontal: 12,
                }}
                dropDownContainerStyle={{
                  // Estilo para o menu suspenso
                  backgroundColor: colorScheme === "dark" ? "#f5f5f5" : "#171717",
                  borderRadius: 20,
                }}
                textStyle={{
                  // Estilo para o texto dentro do botão
                  fontSize: 14,
                  fontWeight: "600",
                  color: colorScheme === "dark" ? "#000" : "#fff",
                }}
                ArrowDownIconComponent={({ style }) => (
                  <AntDesign name="down" size={18} color="gray" />
                )}
                ArrowUpIconComponent={({ style }) => (
                  <AntDesign name="up" size={18} color="gray" />
                )}
              />
            </View>
          </View>
        </View>
        <View className='flex-col w-full  px-5 mx-10'>
          <FlatList
            data={services}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CardPesquisa
                id={item.id}
                cli_name={item.cli_name}
                service_desc={item.service_desc}
                service_pag={item.service_pag}
              />
            )}
            contentContainerStyle={{ padding: 16 }}
          />
        </View>
      </View>
      <Navbar />
    </View>
  );
}