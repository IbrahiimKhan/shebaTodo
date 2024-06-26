import React, {type ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {type NavigationProps} from '@/types/navigation';

import {AuthenticatedNavigator} from './AuthenticatedNavigator';
import {UnAuthenticatedNavigator} from './UnAuthenticatedNavigator';
import useAuthStore from '@/store/useAuthStore';
import {navigationRef} from './RootNavigation';

export const Navigator = (props: NavigationProps): ReactElement => {
  const {isLoggedIn} = useAuthStore();
  return (
    <NavigationContainer {...props} ref={navigationRef}>
      {isLoggedIn ? <AuthenticatedNavigator /> : <UnAuthenticatedNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
