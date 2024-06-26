import {StatusBar} from 'native-base';
import React, {FC, PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

type ScreenProps = PropsWithChildren;
export const Screen: FC<ScreenProps> = ({children}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f3f3f3" />
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
});
