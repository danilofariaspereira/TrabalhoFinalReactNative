import React from 'react';
import { RoutesTypes } from './src/routes';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/context/auth';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' translucent />
      <AuthProvider>
        <RoutesTypes />
      </AuthProvider>
    </NavigationContainer>
  );
}