import React from 'react';
import { Button, View, Text } from 'react-native';
import { Input, Icon } from '@rneui/themed';
import { useSelector } from 'react-redux';
import { userLoginData } from '../loginSlice';

export default function ProfileScreen() {
  const user = useSelector(userLoginData);
  
  console.log(user);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Text>{user.user}</Text>
      </View>
    );
  }
