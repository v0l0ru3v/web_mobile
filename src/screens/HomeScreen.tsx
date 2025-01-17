import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

// Компонент для HomeScreen
export default function HomeScreen() {
  // Определение цвета фона в зависимости от платформы
  const platformColor = Platform.OS === 'ios' ? '#fff' : '#28a745'; // Белый для iOS, зеленый для Android

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать на главную страницу</Text>

      {/* Платформо-специфичный блок */}
      <View style={[styles.platformBlock, { backgroundColor: platformColor }]}>
        <Text style={styles.platformText}>Платформа: {Platform.OS.toUpperCase()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  platformBlock: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  platformText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
