import React from 'react';
import { RoutesTypes } from './src/routes';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/context/auth';

export default function App() {
  return (
    <>
      <StatusBar style='light' translucent />
      <AuthProvider>
        <RoutesTypes />
      </AuthProvider>
    </>
  );
}