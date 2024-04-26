import React from 'react';
import { Button, View, Text } from 'react-native';
import { Input, Icon } from '@rneui/themed';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './component/home.js';
import DetailsScreen from './component/detail.js';
import ProfileScreen from './component/profile.js';

export default () => {


const Stack = createNativeStackNavigator();

return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
  </NavigationContainer>
);
};