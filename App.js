import React from 'react';
import { Button, View, Text } from 'react-native';
import { Input, Icon } from '@rneui/themed';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './component/home.js';
import DetailsScreen from './component/detail.js';
import ProfileScreen from './component/profile.js';
import LoginScreen from './component/login.js';
import RegisterScreen from './component/register.js';
import LocationInfoScreen from './component/info.js';

export default () => {


const Stack = createNativeStackNavigator();

return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Info" component={LocationInfoScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
  </NavigationContainer>
);
};