import {Header, Screen, Task} from '@/components';
import useAuthStore from '@/store/useAuthStore';
import useTaskStore from '@/store/useTaskStore';
import {HomeStackScreenProps} from '@/types/navigation';
import {useIsFocused} from '@react-navigation/native';
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
import React, {FC, useEffect} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';

interface HomeScreenprops extends HomeStackScreenProps<'AddTask'> {}

export const HomeScreen: FC<HomeScreenprops> = ({navigation}) => {
  const {user} = useAuthStore();
  const tasks = useTaskStore(state => state.tasks);

  const navigateToAddTaskScreen = () => {
    navigation.navigate('AddTask');
  };

  const isFocused = useIsFocused();

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
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={tasks}
          ListEmptyComponent={() => <Text>No Task Found! Add one please</Text>}
          renderItem={({item}) => <Task {...item} />}
          estimatedItemSize={200}
        />
        {isFocused ? (
          <Fab
            renderInPortal={false}
            position="absolute"
            onPress={navigateToAddTaskScreen}
            size="sm"
            background="blue.700"
            icon={<AddIcon color="white" size="lg" />}
          />
        ) : null}
      </Box>
    </Screen>
  );
};

export default HomeScreen;
