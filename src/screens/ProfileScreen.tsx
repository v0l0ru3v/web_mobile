import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Личный кабинет</Text>

      <View style={styles.form}>
        <Text>Логин</Text>
        <TextInput placeholder="Введите логин" style={styles.input} editable />
        <Text>Пароль</Text>
        <TextInput placeholder="Введите пароль" style={styles.input} secureTextEntry editable />
        <Button title="Войти" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  form: { width: '100%' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
