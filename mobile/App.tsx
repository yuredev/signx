import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.AppContainer}>
      <View>
        <TextInput 
          value={username}
          placeholder="Username"
          onChangeText={username => setUsername(username)}
          style={styles.Input}
        />
        <TextInput 
          value={password}
          onChangeText={password => setPassword(password)}
          style={styles.Input}
        />
        <Button
          onPress={() => {}}
          title="Sign In"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 24,
    color: '#222'
  },
  Input: {
    color: '#222',
    paddingHorizontal: 12,
    width: 300,
    height: 45,
    margin: 12,
    borderWidth: 1,
    borderColor: '#AAAAAAEE',
    borderRadius: 10,
    backgroundColor: '#EEEEEE',
  },
});

export default App;
