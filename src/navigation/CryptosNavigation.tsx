import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ListScreen } from '../screens/ListScreen';
import { InfoScreen } from '../screens/InfoScreen';
import { LoginScreen } from '../screens/LoginScreen';

export type ListStackParams = {
    ListScreen: undefined,
    LoginScreen: undefined,
    InfoScreen: { id?: string, name?: string } 
}
const Stack = createStackNavigator<ListStackParams>();

export const CryptosNavigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            cardStyle:  {
                backgroundColor: 'white'
            },
            headerStyle:{
                elevation: 0,
                shadowColor: 'transparent'
            }
        }}
    >
        <Stack.Screen
            name="ListScreen"
            component={ListScreen}
            options={{title: 'Cryptos'}}
        />
        <Stack.Screen
            name="InfoScreen"
            component={InfoScreen}
        />
        <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
        />
    </Stack.Navigator>
  )
}
