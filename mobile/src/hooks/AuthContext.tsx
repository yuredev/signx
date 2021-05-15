import React, { createContext, useCallback, useContext, useState } from 'react';
import { Alert } from 'react-native';
import api from '../services/api';

interface AuthData {
  user: object;
  token: string;
}

interface SignInCredentials {
  password: string;
  username: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>
}

const AuthContext = createContext({} as AuthContextData);

export const useAuth = useContext(AuthContext);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>({} as AuthData);

  const signIn = useCallback(async ({ password, username }: SignInCredentials) => {
    try {
      console.log('username: ', username);
      const { user, token } = (await api.post('/session', {
        username,
        password,
      })).data;
      setAuthData({token, user})
      Alert.alert('Login efetuado com sucessox', `Bem vindo ${user.username}`);
    } catch (error) {
      Alert.alert(error.message);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user: authData.user, signIn }}>
      { children }
    </AuthContext.Provider>
  );
}

