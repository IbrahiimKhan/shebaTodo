import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {type ReactElement} from 'react';

import {AddTaskScreen} from '@/screens/authenticated/AddTaskScreen';
import {HomeScreen} from '@/screens/authenticated/HomeScreen';
import {ViewTaskScreen} from '@/screens/authenticated/ViewTaskScreen';
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
      <Stack.Screen
        options={{
          animation: 'slide_from_bottom',
        }}
        name="AddTask"
        component={AddTaskScreen}
      />
      <Stack.Screen
        options={{
          animation: 'slide_from_bottom',
        }}
        name="ViewTask"
        component={ViewTaskScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
