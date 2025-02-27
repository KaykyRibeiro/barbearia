import React, { useState } from 'react';
import { View, Alert, Text, TouchableOpacity, useColorScheme, TextInput } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "react-native-modal-datetime-picker";
import { format } from "date-fns";
import { Ionicons } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Constants from 'expo-constants';
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import axios from 'axios';

const statusBarHeight = Constants.statusBarHeight;

export default function CadastrarServico() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const [clienteId, setClienteId] = useState('');
  const [barbeiroId, setBarbeiroId] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [status, setStatus] = useState('Agendado');
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [valueDrop, setValueDrop] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "11:00", value: "11:00" },
    { label: "11:30", value: "11:30" },
    { label: "12:00", value: "12:00" },
  ]);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);
  const handleConfirm = (selectedDate:any) => {
    setDate(selectedDate || date);
    hideDatePicker();
  };

  const handleAgendarServico = async () => {
    if (!clienteId || !barbeiroId || !descricao || !valor || !valueDrop) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios.');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:3000/api/services`, {
        cli_temp_id: 1,
        barber_id: 1,
        desc_serv: 'teste',
        serv_valor: parseFloat(valor.replace(/[^0-9,]/g, '').replace(',', '.')), 
        serv_data_hora: `${format(date, "yyyy-MM-dd")} ${valueDrop}`,
        serv_status: 'agendado'
      });
      
      Alert.alert('Sucesso', 'Serviço agendado com sucesso!');
      console.log(response.data);
    } catch (error) {
      Alert.alert('Erro', 'Falha ao agendar serviço.');
      console.error(error);
    }
  };

  return (
    <View className="flex-1 bg-neutral-200 dark:bg-neutral-900">
      <View className="w-full ml-4" style={{ marginTop: statusBarHeight + 8 }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={34} color={colorScheme === "dark" ? "#FFFFFF" : "#000000"} />
        </TouchableOpacity>
      </View>

      <Text className="text-3xl font-medium text-neutral-900 dark:text-neutral-100 text-center">
        Adicionar serviço
      </Text>
      
      <View className='mx-4 mt-8'>
        <Text className="font-medium text-md">Cliente:</Text>
        <TextInput value={clienteId} onChangeText={setClienteId} placeholder="Nome do cliente" />
      </View>
      
      <View className='mx-4 mt-4'>
        <Text className="font-medium text-md">Barbeiro:</Text>
        <TextInput value={barbeiroId} onChangeText={setBarbeiroId} placeholder="Nome do barbeiro" />
      </View>
      
      <View className='mx-4 mt-4'>
        <Text className="font-medium text-md">Descrição:</Text>
        <TextInput value={descricao} onChangeText={setDescricao} placeholder="Descrição do serviço" />
      </View>

      <View className='mx-4 mt-4'>
        <Text className="font-medium text-md">Data:</Text>
        <TouchableOpacity onPress={showDatePicker}>
          <Text>{format(date, "dd/MM/yyyy")}</Text>
        </TouchableOpacity>
        <DateTimePicker isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
      </View>
      
      <View className='mx-4 mt-4'>
        <Text className="font-medium text-md">Horário:</Text>
        <DropDownPicker open={open} value={valueDrop} items={items} setOpen={setOpen} setValue={setValueDrop} setItems={setItems} placeholder="Selecione o horário" />
      </View>

      <View className='mx-4 mt-4'>
        <Text className="font-medium text-md">Valor:</Text>
        <TextInput value={valor} onChangeText={setValor} placeholder="R$ 0,00" keyboardType="numeric" />
      </View>
      
      <TouchableOpacity onPress={handleAgendarServico} className='mt-8 bg-black px-4 py-3 rounded-full w-6/12 self-center'>
        <Text className="text-center text-2xl text-white font-semibold">Agendar</Text>
      </TouchableOpacity>
    </View>
  );
}
