import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Личный кабинет</Text>

      {/* Форма-заглушка для логина */}
      <View style={styles.form}>
        <Text style={styles.label}>Логин</Text>
        <TextInput
          style={styles.input}
          placeholder="Введите логин"
          editable={true} 
        />

        <Text style={styles.label}>Пароль</Text>
        <TextInput
          style={styles.input}
          placeholder="Введите пароль"
          secureTextEntry={true}
          editable={true} 
        />

        <Button title="Войти" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '100%',
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 8,
    elevation: 2, // Тень для Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // Тень для iOS
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 15,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#e0e0e0', // Серый фон для заглушки
  },
});
