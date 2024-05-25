import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './component/home.js';
import DetailsScreen from './component/detail.js';
import ProfileScreen from './component/profile.js';
import LoginScreen from './component/login.js';
import RegisterScreen from './component/register.js';
import LocationInfoScreen from './component/info.js';
import AlbumList from './component/album.js';
import { Provider } from 'react-redux';
import store from './store.js';
export default () => {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Album">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Info" component={LocationInfoScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Album" component={AlbumList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
