import React, {type ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {type NavigationProps} from '@/types/navigation';

import {AuthenticatedNavigator} from './AuthenticatedNavigator';
import {UnAuthenticatedNavigator} from './UnAuthenticatedNavigator';

export const Navigator = (props: NavigationProps): ReactElement => {
  const isLoggedIn = false;

  return (
    <NavigationContainer {...props}>
      {isLoggedIn ? <AuthenticatedNavigator /> : <UnAuthenticatedNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
