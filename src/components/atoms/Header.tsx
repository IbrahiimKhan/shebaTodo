import {ArrowBackIcon, HStack, Text} from 'native-base';
import React, {FC, ReactElement} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

type HeaderProps = {
  left?: () => ReactElement;
  right?: () => ReactElement;
  title: string;
};

const Header: FC<HeaderProps> = ({left, right, title}) => {
  return (
    <HStack alignItems="center" justifyContent="space-between">
      {left ? (
        left()
      ) : (
        <TouchableOpacity onPress={() => ''}>
          <ArrowBackIcon size="5" mt="0.5" color="black" />
        </TouchableOpacity>
      )}
      <Text color="black" fontSize={16} fontWeight="semibold">
        {title}
      </Text>
      {right ? right() : null}
    </HStack>
  );
};

export default Header;

const styles = StyleSheet.create({});
