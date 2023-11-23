import React from 'react';
import { RoutesTypes } from './src/routes';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>    
      <StatusBar style='light' translucent/>
      <RoutesTypes />
    </>
  );
}