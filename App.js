import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './homeScreen';
import Other from './otherScreen';
import EndScreen from './endScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Other" options={{ headerShown: false }} component={Other} />
        <Stack.Screen name="End" options={{ headerShown: false }} component={EndScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}