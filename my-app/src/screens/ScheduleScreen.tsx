import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ScheduleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Расписание матчей</Text>
      <Text style={styles.text}>🏆 12.04.2024 - Матч с Командой А</Text>
      <Text style={styles.text}>🏆 19.04.2024 - Матч с Командой Б</Text>
      <Text style={styles.text}>🏆 26.04.2024 - Матч с Командой В</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 18, marginVertical: 5 },
});
