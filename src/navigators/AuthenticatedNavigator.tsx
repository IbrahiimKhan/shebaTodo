import useAuthStore from '@/store/useAuthStore';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const AuthenticatedNavigator = () => {
  const {user} = useAuthStore();
  console.log(user);
  return (
    <View>
      <Text>AuthenticatedNavigator</Text>
    </View>
  );
};

export default AuthenticatedNavigator;
