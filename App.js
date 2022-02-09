import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import RootStackScreen from './screens/rootStack';

export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}


