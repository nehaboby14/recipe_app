/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SigninScreen from './src/screens/SigninScreen/SigninScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import RecipesScreen from './src/screens/RecipesScreens/RecipesScreen';

AppRegistry.registerComponent(appName, () => App);
