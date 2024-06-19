/* eslint-disable react/no-unstable-nested-components */
import {Header, Screen, Scrollable, Task} from '@/components';
import useAuthStore from '@/store/useAuthStore';
import useTaskStore from '@/store/useTaskStore';
import {HomeStackScreenProps} from '@/types/navigation';
import {TaskProps} from '@/types/taskTypes';
import {
  configureNotifications,
  scheduleTaskNotifications,
} from '@/utils/notificatation';
import {useIsFocused} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import {
  AddIcon,
  Avatar,
  Box,
  Fab,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from 'native-base';
import React, {FC, useEffect, useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';

interface HomeScreenprops extends HomeStackScreenProps<'AddTask'> {}

export const HomeScreen: FC<HomeScreenprops> = ({navigation}) => {
  const {user} = useAuthStore();
  const tasks = useTaskStore(state => state.tasks);
  const [taskList, setTaskList] = useState<TaskProps[]>([]);
  const categories = ['All', 'Todo', 'In Progress', 'Completed'];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryPress = (item: string) => {
    if (item === 'All') {
      setSelectedCategory('All');
      setTaskList(tasks);
      return;
    }
    setSelectedCategory(item);
    const filteredTasks = tasks.filter(
      task => task.status.toLowerCase() === item.toLowerCase(),
    );
    setTaskList(filteredTasks);
  };

  const navigateToAddTaskScreen = () => {
    navigation.navigate('AddTask');
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    setTaskList(tasks);
    configureNotifications();
    scheduleTaskNotifications(tasks);
  }, [tasks]);
  console.log(tasks);
  return (
    <Screen>
      <Header
        title=""
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
                Hello
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
        <Scrollable
          data={categories}
          selectedItem={selectedCategory}
          handleItemPress={item => handleCategoryPress(item)}
        />
        <FlashList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={taskList}
          ListEmptyComponent={() => <Text>No Task Found! Add one please</Text>}
          renderItem={({item}) => <Task {...item} />}
          estimatedItemSize={200}
        />
        {isFocused ? (
          <Fab
            renderInPortal={false}
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
