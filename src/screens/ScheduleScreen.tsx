import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Ссылка на API
const API_URL = 'https://676857e4cbf3d7cefd37b8a8.mockapi.io/api/schedule/matches'; 

export default function ScheduleScreen() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Функция для получения данных с API
  const fetchSchedule = async () => {
    try {
      const response = await fetch(API_URL); // Отправка GET-запроса
      const data = await response.json();    // Преобразуем ответ в JSON
      setMatches(data);                      // Обновляем состояние с матчами
      setLoading(false);                     // Завершаем загрузку

      // Сохраняем данные в AsyncStorage
      await AsyncStorage.setItem('schedule', JSON.stringify(data));

    } catch (err) {
      setError('Не удалось загрузить расписание'); // Ошибка в случае сбоя запроса
      setLoading(false);                      // Завершаем загрузку
    }
  };

  // Загружаем данные при монтировании компонента
  useEffect(() => {
    const loadScheduleFromStorage = async () => {
      const savedSchedule = await AsyncStorage.getItem('schedule');
      
      if (savedSchedule) {
        setMatches(JSON.parse(savedSchedule)); // Если данные есть в AsyncStorage, используем их
        setLoading(false); // Завершаем загрузку
      } else {
        fetchSchedule(); // Если данных нет, загружаем с API
      }
    };

    loadScheduleFromStorage();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Загрузка...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  // Функция для форматирования даты в формат ДД.ММ.ГГГГ
  const formatDate = (date: string) => {
    const formattedDate = new Date(date);
    return `${formattedDate.getDate().toString().padStart(2, '0')}.${(formattedDate.getMonth() + 1).toString().padStart(2, '0')}.${formattedDate.getFullYear()}`;
  };

  // Функция для форматирования времени в формат ЧЧ:ММ
  const formatTime = (time: string) => {
    const formattedTime = new Date(time);
    return `${formattedTime.getHours().toString().padStart(2, '0')}:${formattedTime.getMinutes().toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Расписание матчей</Text>
      <FlatList
        data={matches}                      // Данные, которые пришли с API или из AsyncStorage
        keyExtractor={(item) => item.id.toString()}  // Ключ для каждого элемента
        renderItem={({ item }) => (
          <View style={styles.matchItem}>
            <View style={styles.matchDetails}>
              <Text style={styles.matchText}>
                {item.team1} - {item.team2}
              </Text>
              <Text style={styles.matchDate}>{formatDate(item.date)}</Text>
              <Text style={styles.matchTime}>{formatTime(item.time)}</Text>
              <Text style={styles.matchLocation}>{item.location}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f4f4f4' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  matchItem: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,  // Тень для Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, // Тень для iOS
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  matchDetails: {
    marginBottom: 10,
  },
  matchText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  matchDate: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
  },
  matchTime: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
  },
  matchLocation: {
    fontSize: 16,
    color: '#777',
  },
});
