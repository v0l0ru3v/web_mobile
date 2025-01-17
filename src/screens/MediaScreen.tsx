import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function MediaFeed() {
  const [photos, setPhotos] = useState<string[]>([]); // Состояние для хранения списка фотографий

  // Функция для выбора изображения
  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 1,
      });

      console.log('Результат выбора изображения:', result);  // Логирование результата выбора

      if (!result.canceled) {
        console.log('Добавляем изображение в ленту:', result.assets[0].uri);  // Логирование URI изображения
        setPhotos([...photos, result.assets[0].uri]); // Добавляем новое фото в ленту
      } else {
        console.log('Выбор изображения отменен');  // Логируем, если выбор отменен
      }
    } catch (error) {
      console.error('Ошибка при выборе изображения:', error);  // Логирование ошибок
    }
  };

  // Отображение ленты фотографий с использованием React.memo
  const RenderPhoto = React.memo(({ uri }: { uri: string }) => {
    console.log('Отображаем изображение:', uri);  // Логирование каждого изображения
    return (
      <View style={styles.photoContainer}>
        <Image source={{ uri }} style={styles.photo} />
      </View>
    );
  });

  // Отображение ленты фотографий
  const renderItem = ({ item }: { item: string }) => <RenderPhoto uri={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Лента фотографий</Text>
      
      {/* Лента с фотографиями */}
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1} // Количество фотографий в ряду
        contentContainerStyle={styles.feed}
      />

      {/* Кнопка для добавления фото */}
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Добавить фото</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  feed: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  photoContainer: {
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    objectFit: 'contain',
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: '#007bff',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
