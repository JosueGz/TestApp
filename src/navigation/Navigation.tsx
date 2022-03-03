import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { ListScreen } from '../screens/ListScreen';
import { InfoScreen } from '../screens/InfoScreen';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
      cardStyle:{
        backgroundColor: 'white'
      }
      }}
    >
    
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ListScreen" component={ListScreen} />
      <Stack.Screen name="InfoScreen" component={InfoScreen} />
    </Stack.Navigator>
  );
}