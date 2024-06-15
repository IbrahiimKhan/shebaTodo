import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {type ReactElement} from 'react';

import {LoginScreen} from '@/screens/unauthenticated/LoginScreen';
import {SignUpScreen} from '@/screens/unauthenticated/SignUpScreen';
import {type UnAuthenticatedStackNavigatorParamList} from '@/types/navigation';

const Stack =
  createNativeStackNavigator<UnAuthenticatedStackNavigatorParamList>();

export const UnAuthenticatedNavigator = (): ReactElement => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{
          animation: 'slide_from_left',
        }}
        name="Register"
        component={SignUpScreen}
      />
      <Stack.Screen
        options={{
          animation: 'slide_from_left',
        }}
        name="Login"
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export default UnAuthenticatedNavigator;
