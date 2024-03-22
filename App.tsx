/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from './src/screens/SigninScreen/SigninScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import RecipesScreen from './src/screens/RecipesScreens/RecipesScreen';
const App = () => {
    
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInScreen">
        <Stack.Screen name="SignInScreen" component={SigninScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="RecipesScreen" component={RecipesScreen} />
      </Stack.Navigator>
  </NavigationContainer>
    
  );
}
export default App;