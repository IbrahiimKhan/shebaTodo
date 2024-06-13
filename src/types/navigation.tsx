import {
  type NavigationContainer,
  type NavigatorScreenParams,
} from '@react-navigation/native';
import {type NativeStackScreenProps} from '@react-navigation/native-stack';
import {type ComponentProps} from 'react';

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
};

export type RootTabNavigatorParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
};

export type HomeStackParamList = {
  Home: undefined;
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  NativeStackScreenProps<HomeStackParamList, T>;

export type RechargeStackParamList = {
  Recharge: undefined;
};

export type RechargeStackScreenProps<T extends keyof RechargeStackParamList> =
  NativeStackScreenProps<RechargeStackParamList, T>;

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
        HomeStackParamList,
        RechargeStackParamList {}
  }
}
