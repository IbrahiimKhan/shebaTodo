import {Header, Screen, Task} from '@/components';
import {
  AddIcon,
  Avatar,
  Box,
  Fab,
  HStack,
  HamburgerIcon,
  VStack,
  Text,
} from 'native-base';
import React from 'react';

export const HomeScreen = () => {
  return (
    <Screen>
      <Header
        title=""
        // eslint-disable-next-line react/no-unstable-nested-components
        left={() => (
          <HStack alignItems="center">
            <Avatar
              mr={3}
              bg="blue.500"
              source={require('@assets/images/avatar.jpg')}>
              fa
            </Avatar>
            <VStack>
              <Text fontFamily="body" fontSize={14}>
                Hellow
              </Text>
              <Text fontWeight="semibold" fontFamily="heading" fontSize={16}>
                Sharthak
              </Text>
            </VStack>
          </HStack>
        )}
        right={() => <HamburgerIcon size="xl" />}
      />
      <Box flex={1} mx={5}>
        <Task />
        <Task />
        <Task />
        <Task />
        <Fab
          position="absolute"
          size="sm"
          background="blue.700"
          icon={<AddIcon color="white" size="lg" />}
        />
      </Box>
    </Screen>
  );
};

export default HomeScreen;
