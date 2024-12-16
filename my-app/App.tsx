import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Schedule: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Главная страница' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Личный кабинет' }} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} options={{ title: 'Расписание' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
