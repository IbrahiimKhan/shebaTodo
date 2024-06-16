import {Header, Screen, Task} from '@/components';
import useAuthStore from '@/store/useAuthStore';
import {FlashList} from '@shopify/flash-list';
import {
  AddIcon,
  Avatar,
  Box,
  Button,
  Fab,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';

export const HomeScreen = () => {
  const {user} = useAuthStore();
  console.log(user);
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
                {user?.name}
              </Text>
            </VStack>
          </HStack>
        )}
        right={() => <Icon as={Octicons} name="bell" size="xl" />}
      />
      <Box flex={1} mx={5}>
        <VStack py={5}>
          <Heading>Let's make a</Heading>
          <Heading>
            <Text color="blue.500">Habit</Text> together
          </Heading>
        </VStack>
        <HStack space={4} mb={5}>
          <Button colorScheme="warning" py={1}>
            To Do
          </Button>
          <Button colorScheme="secondary">Todo</Button>
          <Button>Todo</Button>
        </HStack>
        <FlashList
          data={[1, 2, 3]}
          renderItem={({item}) => (
            <Task
              title={'web development'}
              description={'do the web development'}
              expiryDate={new Date()}
              status={'todo'}
              img={''}
            />
          )}
          estimatedItemSize={200}
        />
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
