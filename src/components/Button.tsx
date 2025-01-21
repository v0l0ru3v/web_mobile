import React from 'react';
import { View, Button, Text } from 'react-native';

const MyButton = ({ label, onPress }: { label: string, onPress: () => void }) => (
  <View>
    <Text>{label}</Text>
    <Button title="Click me" onPress={onPress} />
  </View>
);

export default MyButton;
