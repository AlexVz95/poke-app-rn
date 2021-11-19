/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/modules/Home/views/Home';
import Details from './src/modules/Home/views/Details';
import PokemonList from './src/modules/Home/views/PokemonList';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PokemonList" component={PokemonList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
