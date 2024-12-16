import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Личный кабинет</Text>
      <Text style={styles.text}>Имя: Иван Иванов</Text>
      <Text style={styles.text}>Позиция: Нападающий</Text>
      <Text style={styles.text}>Возраст: 25 лет</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 18, marginVertical: 5 },
});
