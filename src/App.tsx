import {NativeBaseProvider} from 'native-base';
import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {theme} from './theme';
import Navigator from './navigators';

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs([
      'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
    ]);
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <Navigator />
    </NativeBaseProvider>
  );
};

export default App;
