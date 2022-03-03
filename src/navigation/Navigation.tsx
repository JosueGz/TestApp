import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { ListScreen } from '../screens/ListScreen';
import { InfoScreen } from '../screens/InfoScreen';
import { CryptosNavigation } from './CryptosNavigation';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      cardStyle:{
        backgroundColor: 'white'
      }
      }}
    >
    
      <Stack.Screen name="Login" component={LoginScreen} />
      <>
        <Stack.Screen name="Crypto" component={CryptosNavigation} />
        
      </>
      
    </Stack.Navigator>
  );
}