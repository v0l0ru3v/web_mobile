import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Типизация параметров экрана
type RootStackParamList = {
  Login: undefined;
  Profile: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const users = [
  {
    id: 1,
    username: 'testuser',
    password: '123456',
  },
  {
    id: 2,
    username: 'admin',
    password: 'admin123',
  },
];

export default function LoginScreen({ navigation }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Проверка данных пользователя
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Если данные корректны, сохраняем токен в AsyncStorage
      await AsyncStorage.setItem('userToken', 'some-jwt-token');
      
      // Переход на экран профиля
      Alert.alert('Успешно', 'Добро пожаловать!');
      navigation.navigate('Profile');
    } else {
      // Если данные неверные, показываем ошибку
      Alert.alert('Ошибка', 'Неверный логин или пароль.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Вход</Text>

      <TextInput
        placeholder="Введите логин"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Введите пароль"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Войти" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});
