import React, {useCallback, useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useAuth } from '../hooks/AuthContext';

const SignIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  return (
    <View style={styles.SignInContainer}>
      <View>
        <TextInput
          value={username}
          placeholder="Username"
          placeholderTextColor="#777"
          onChangeText={username => setUsername(username)}
          style={styles.Input}
        />
        <TextInput
          value={password}
          placeholder="Password"
          placeholderTextColor="#777"
          onChangeText={password => setPassword(password)}
          style={styles.Input}
        />
        <TouchableOpacity style={styles.Button} onPress={() => signIn({ password, username })}>
          <Text style={styles.ButtonText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SignInContainer: {
    flex: 1,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  ButtonText: {
    color: '#FAEAFA',
    fontSize: 16,
  },
  Button: {
    alignItems: 'center',
    paddingHorizontal: 12,
    justifyContent: 'center',
    width: 300,
    backgroundColor: '#77F',
    marginVertical: 6,
    borderRadius: 3,
    height: 50,
  },
  Input: {
    height: 50,
    color: '#222',
    paddingHorizontal: 12,
    width: 300,
    marginVertical: 6,
    borderColor: '#AAAAAAEE',
    borderRadius: 3,
    backgroundColor: '#EEEEEE',
  },
});

export default SignIn;
