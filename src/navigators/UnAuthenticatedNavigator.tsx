import React, {type ReactElement} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {type UnAuthenticatedStackNavigatorParamList} from '@/types/navigation';
import {LoginScreen} from '@/screens/unauthenticated/LoginScreen';
import {RegisterScreen} from '@/screens/unauthenticated/RegisterScreen';

const Stack =
  createNativeStackNavigator<UnAuthenticatedStackNavigatorParamList>();

export const UnAuthenticatedNavigator = (): ReactElement => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        options={{
          animation: 'slide_from_right',
        }}
        name="Login"
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export default UnAuthenticatedNavigator;
