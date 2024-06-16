import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {type ReactElement} from 'react';

import HomeScreen from '@/screens/authenticated/HomeScreen';
import {LoginScreen} from '@/screens/unauthenticated/LoginScreen';
import {type AuthenticatedStackNavigatorParamList} from '@/types/navigation';

const Stack =
  createNativeStackNavigator<AuthenticatedStackNavigatorParamList>();

export const AuthenticatedNavigator = (): ReactElement => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{
          animation: 'slide_from_left',
        }}
        name="Root"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
