import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import LoginScreen from './src/screens/LoginScreen';
import MediaScreen from './src/screens/MediaScreen'



// Создаем типы для стека и табов
type RootTabParamList = {
  Home: undefined;
  Profile: undefined;
  Schedule: undefined;
  Media: undefined;
};


const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false, // Убираем заголовки экранов
          tabBarActiveTintColor: '#005be3', // Цвет активной иконки
          tabBarInactiveTintColor: 'gray', // Цвет неактивной иконки
          tabBarStyle: { height: 60 }, // Высота нижнего меню
          tabBarLabelStyle: { fontSize: 14 }, // Размер текста вкладки
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarLabel: 'Главная' }}
        />
        <Tab.Screen
          name="Media"
          component={MediaScreen}
          options={{ tabBarLabel: 'Медиа' }}
        />
        <Tab.Screen
          name="Schedule"
          component={ScheduleScreen}
          options={{ tabBarLabel: 'Расписание' }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ tabBarLabel: 'Личный кабинет' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
