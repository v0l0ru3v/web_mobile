import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import MediaFeed from './MediaFeed';  // Путь к компоненту MediaFeed
import * as ImagePicker from 'expo-image-picker';

// Мокируем ImagePicker для тестов
jest.mock('expo-image-picker');

describe('MediaFeed component', () => {

  // Интеграционное тестирование: Проверяем, что изображение добавляется в ленту
  it('должен добавлять фото в ленту после выбора изображения', async () => {
    const mockUri = 'mock_image_uri';
    
    // Мокаем результат выбора изображения
    ImagePicker.launchImageLibraryAsync.mockResolvedValueOnce({
      canceled: false,
      assets: [{ uri: mockUri }],
    });

    // Рендерим компонент
    render(<MediaFeed />);

    // Находим кнопку "Добавить фото"
    const button = screen.getByText('Добавить фото');
    fireEvent.press(button);  // Нажимаем кнопку

    // Ожидаем появления изображения в ленте
    await waitFor(() => {
      const image = screen.getByTestId('photo');
      expect(image.props.source.uri).toBe(mockUri);  // Проверяем, что URI соответствует ожидаемому
    });
  });

  // Интеграционное тестирование: Проверяем, что фото не добавляется при отмене выбора
  it('не должен добавлять фото, если выбор был отменен', async () => {
    // Мокаем отмену выбора изображения
    ImagePicker.launchImageLibraryAsync.mockResolvedValueOnce({
      canceled: true,
    });

    // Рендерим компонент
    render(<MediaFeed />);

    // Находим кнопку "Добавить фото"
    const button = screen.getByText('Добавить фото');
    fireEvent.press(button);  // Нажимаем кнопку

    // Ожидаем, что фото не добавилось в ленту
    const images = screen.queryAllByTestId('photo');
    expect(images).toHaveLength(0);  // Проверяем, что изображений в ленте нет
  });

  // Функциональное тестирование: Проверяем работу кнопки "Добавить фото" при успешном выборе изображения
  it('должен добавить фото в ленту после успешного выбора изображения', async () => {
    const mockUri = 'mock_image_uri';
    
    // Мокаем успешный выбор изображения
    ImagePicker.launchImageLibraryAsync.mockResolvedValueOnce({
      canceled: false,
      assets: [{ uri: mockUri }],
    });

    // Рендерим компонент
    render(<MediaFeed />);

    // Находим кнопку и нажимаем её
    const button = screen.getByText('Добавить фото');
    fireEvent.press(button);

    // Ожидаем, что изображение будет добавлено в ленту
    await waitFor(() => {
      const image = screen.getByTestId('photo');
      expect(image.props.source.uri).toBe(mockUri);  // Проверяем, что изображение с правильным URI добавлено
    });
  });

  // Функциональное тестирование: Проверяем, что при ошибке выбора изображения ничего не добавляется
  it('не должен добавлять фото, если произошла ошибка при выборе', async () => {
    // Мокаем ошибку при выборе изображения
    ImagePicker.launchImageLibraryAsync.mockRejectedValueOnce(new Error('Ошибка при выборе изображения'));

    // Рендерим компонент
    render(<MediaFeed />);

    // Находим кнопку и нажимаем её
    const button = screen.getByText('Добавить фото');
    fireEvent.press(button);

    // Ожидаем, что фото не добавилось в ленту
    const images = screen.queryAllByTestId('photo');
    expect(images).toHaveLength(0);  // Проверяем, что изображения нет в ленте
  });

});
