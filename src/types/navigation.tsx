import {
  type NavigationContainer,
  type NavigatorScreenParams,
} from '@react-navigation/native';
import {type NativeStackScreenProps} from '@react-navigation/native-stack';
import {type ComponentProps} from 'react';
import {TaskProps} from './taskTypes';

export interface NavigationProps
  extends Partial<ComponentProps<typeof NavigationContainer>> {}

export type RootNavigatorParamList = {
  UnAuthenticatedStack: NavigatorScreenParams<UnAuthenticatedStackNavigatorParamList>;
  AuthenticatedStack: NavigatorScreenParams<AuthenticatedStackNavigatorParamList>;
};

export type UnAuthenticatedStackNavigatorParamList = {
  Login: undefined;
  Register: undefined;
};

export type AuthenticatedStackNavigatorParamList = {
  Root: NavigatorScreenParams<RootTabNavigatorParamList>;
  AddTask: undefined;
  ViewTask: TaskProps;
};

export type RootTabNavigatorParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
};

export type HomeStackParamList = {
  Home: undefined;
  AddTask: undefined;
  ViewTask: TaskProps;
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  NativeStackScreenProps<HomeStackParamList, T>;

export type RootNavigatorScreenProps<T extends keyof RootNavigatorParamList> =
  NativeStackScreenProps<RootNavigatorParamList, T>;

export type UnAuthenticatedStackNavigatorScreenProps<
  T extends keyof UnAuthenticatedStackNavigatorParamList,
> = NativeStackScreenProps<UnAuthenticatedStackNavigatorParamList, T>;

export type AuthenticatedStackNavigatorScreenProps<
  T extends keyof AuthenticatedStackNavigatorParamList,
> = NativeStackScreenProps<AuthenticatedStackNavigatorParamList, T>;

declare global {
  namespace ReactNavigation {
    export interface RootParamList
      extends RootNavigatorParamList,
        UnAuthenticatedStackNavigatorParamList,
        AuthenticatedStackNavigatorParamList,
        HomeStackParamList {}
  }
}
