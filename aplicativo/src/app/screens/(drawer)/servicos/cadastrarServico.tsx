import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, useColorScheme, Alert } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "react-native-modal-datetime-picker";
import { format } from "date-fns";
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useRouter } from "expo-router";

const statusBarHeight = Constants.statusBarHeight;

export default function CadastrarServico() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [open, setOpen] = useState(false);
  const [valueDrop, setValueDrop] = useState(null);
  const [items, setItems] = useState([
    { label: "11:00", value: "11:00" },
    { label: "11:30", value: "11:30" },
    { label: "12:00", value: "12:00" },
  ]);

  const [formData, setFormData] = useState({
    cli_name: "",
    cli_tel: "",
    service_desc: "",
    service_pag: "",
    date: new Date().toISOString().split("T")[0],
    barber_name: "",
    horario: "",
  });

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (selectedDate: Date) => {
    const formattedDate = format(selectedDate, "yyyy-MM-dd");
    setFormData({ ...formData, date: formattedDate });
    setDate(selectedDate);
    hideDatePicker();
  };

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://192.168.1.3:3000/api/services-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Alert.alert("Sucesso", "Agendamento realizado com sucesso!");
        setFormData({
          cli_name: "",
          cli_tel: "",
          service_desc: "",
          service_pag: "",
          date: new Date().toISOString().split("T")[0],
          barber_name: "",
          horario: "",
        });
      } else {
        Alert.alert("Erro", "Erro ao enviar os dados!");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
  };

  return (
    <View className="flex-1 bg-neutral-200 dark:bg-neutral-900 px-4">
      {/* Botão de voltar */}
      <View className="w-full mt-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={34} color={colorScheme === "dark" ? "#FFFFFF" : "#000000"} />
        </TouchableOpacity>
      </View>

      <Text className="text-3xl font-medium text-neutral-900 dark:text-neutral-100 text-center mt-4">
        Adicionar serviço
      </Text>

      {/* Campos do formulário */}
      <View className="mt-8">
        <Text className="font-medium text-md">Cliente:</Text>
        <TextInput
          className="bg-white dark:bg-neutral-800 p-3 rounded-lg"
          value={formData.cli_name}
          onChangeText={(text) => handleChange("cli_name", text)}
          placeholder="Nome do cliente"
        />
      </View>

      <View className="mt-4">
        <Text className="font-medium text-md">Barbeiro:</Text>
        <TextInput
          className="bg-white dark:bg-neutral-800 p-3 rounded-lg"
          value={formData.barber_name}
          onChangeText={(text) => handleChange("barber_name", text)}
          placeholder="Nome do barbeiro"
        />
      </View>

      <View className="mt-4">
        <Text className="font-medium text-md">Descrição:</Text>
        <TextInput
          className="bg-white dark:bg-neutral-800 p-3 rounded-lg"
          value={formData.service_desc}
          onChangeText={(text) => handleChange("service_desc", text)}
          placeholder="Descrição do serviço"
        />
      </View>

      <View className="mt-4">
        <Text className="font-medium text-md">Data:</Text>
        <TouchableOpacity className="bg-white dark:bg-neutral-800 p-3 rounded-lg" onPress={showDatePicker}>
          <Text>{format(date, "dd/MM/yyyy")}</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>

      <View className="mt-4">
        <Text className="font-medium text-md">Horário:</Text>
        <DropDownPicker
          open={open}
          value={valueDrop}
          items={items}
          setOpen={setOpen}
          setValue={setValueDrop}
          setItems={setItems}
          placeholder="Selecione o horário"
          containerStyle={{ marginTop: 8 }}
          style={{
            backgroundColor: colorScheme === "dark" ? "#f5f5f5" : "#171717",
            borderRadius: 15,
          }}
          dropDownContainerStyle={{
            backgroundColor: colorScheme === "dark" ? "#f5f5f5" : "#171717",
            borderRadius: 20,
          }}
          textStyle={{
            fontSize: 14,
            fontWeight: "600",
            color: colorScheme === "dark" ? "#000" : "#fff",
          }}
          onChangeValue={(value) => handleChange("horario", value as string)}
        />
      </View>

      {/* Botão de envio */}
      <TouchableOpacity
        onPress={handleSubmit}
        className="mt-8 bg-black px-4 py-3 rounded-full w-6/12 self-center"
      >
        <Text className="text-center text-2xl text-white font-semibold">Agendar</Text>
      </TouchableOpacity>
    </View>
  );
}
