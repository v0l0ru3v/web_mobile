// MyButton.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MyButton from '../components/Button'; // Убедитесь, что путь правильный

describe('MyButton', () => {
  it('renders with label and triggers onPress event', () => {
    // Мокируем функцию onPress
    const mockOnPress = jest.fn();

    // Рендерим компонент с переданным пропсом label и мок функцией onPress
    const { getByText } = render(<MyButton label="Hello, World!" onPress={mockOnPress} />);

    // Проверяем, что текст "Hello, World!" отображается
    getByText('Hello, World!');

    // Ищем кнопку и имитируем нажатие
    const button = getByText('Click me');
    fireEvent.press(button);

    // Проверяем, что при нажатии на кнопку была вызвана функция onPress
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
