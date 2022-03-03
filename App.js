import 'react-native-gesture-handler';

import React from 'react';
import { View, Text } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { ListProvider } from './src/context/ListContext';

const AppState = ({children}: any) => {
  return (
    <ListProvider>
      {children}
    </ListProvider>
  )

}
const App = () => {
  return(
    <NavigationContainer>
      <AppState>
        <Navigation/>
      </AppState>
    </NavigationContainer>
    )
}

export default App;