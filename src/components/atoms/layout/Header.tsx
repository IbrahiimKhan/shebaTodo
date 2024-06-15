import {useNavigation} from '@react-navigation/native';
import {ArrowBackIcon, HStack, Text} from 'native-base';
import React, {FC, ReactElement} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

type HeaderProps = {
  left?: () => ReactElement;
  right?: () => ReactElement;
  title: string;
};

export const Header: FC<HeaderProps> = ({left, right, title}) => {
  const navigation = useNavigation();
  const navigateBack = (): void => {
    navigation.goBack();
  };

  return (
    <HStack mx={5} py={5} alignItems="center" justifyContent="space-between">
      {left ? (
        left()
      ) : (
        <TouchableOpacity onPress={navigateBack}>
          <ArrowBackIcon size="5" mt="0.5" color="black" />
        </TouchableOpacity>
      )}
      <Text
        color="black"
        fontSize={16}
        fontWeight="semibold"
        fontFamily="heading">
        {title}
      </Text>
      {right ? right() : null}
    </HStack>
  );
};

export default Header;
