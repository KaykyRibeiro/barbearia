import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

interface User {
  id: number;
  name: string;
  tell: string;
  acesso: string;
}

const database = {
  users: [
    { id: 1, name: "John Doe", tell: "123456789", acesso: "admin" },
    { id: 2, name: "Jane Smith", tell: "987654321", acesso: "user" },
  ],
};

interface AuthContextType {
  user: User | null;
  login: (tell: string) => Promise<boolean>;
  logout: () => Promise<void>;
  loading: boolean; // Novo estado para controlar a navegação
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Adiciona o estado de carregamento
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem("@user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false); // Set loading false após a verificação
    };

    loadUser();
  }, []);

  const login = async (tell: string): Promise<boolean> => {
    const user = database.users.find((u) => u.tell === tell);

    if (user) {
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUser(user);
      router.push("/screens/(drawer)/home");
      return true;
    } else {
      return false;
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("@user");
    setUser(null);
    router.push("/screens/autenticacao/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

