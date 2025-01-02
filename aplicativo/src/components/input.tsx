import { ReactNode } from "react";
import { View, TextInput, TextInputProps, Text } from "react-native";

type InputProps = {
    children: ReactNode
}

function Input({ children }: InputProps) {
    return (
        <View className="w-auto h-auto flex-col items-end gap-4 ">
            {children}
        </View>
    )
}

function InputField({...res}: TextInputProps){
    return (
        <TextInput className="bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-950 rounded-full px-4 py-4 h-16 text-lg" 
        placeholderTextColor={"#6B7280"}
        {...res} />
    )
}

Input.Field = InputField

export { Input }