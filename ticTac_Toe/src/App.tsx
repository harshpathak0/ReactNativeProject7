import React from 'react'
import MainScreen from './Components/mainScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './Components/startScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tic Tac" component={StartScreen}/>
          <Stack.Screen name="Start Playing" component={MainScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App