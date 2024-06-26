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
import React, {FC, ReactElement, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Toast from 'react-native-toast-message';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface HomeScreenprops extends HomeStackScreenProps<'AddTask'> {}

export const HomeScreen: FC<HomeScreenprops> = ({navigation}): ReactElement => {
  //states and variables
  const {user, onLogout} = useAuthStore();
  const tasks = useTaskStore(state => state.tasks);
  const [taskList, setTaskList] = useState<TaskProps[]>([]);
  const categories = ['All', 'Todo', 'Completed'];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const isFocused = useIsFocused();

  //hanlde category filter
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

  //handle log out
  const handleLogOut = () => {
    onLogout();
    Toast.show({text1: 'Log Out successfull'});
  };

  useEffect(() => {
    setTaskList(tasks);
    //hanlde notifications
    configureNotifications();
    scheduleTaskNotifications(tasks);
  }, [tasks]);

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
        right={() => (
          <TouchableOpacity onPress={handleLogOut}>
            <Icon as={AntDesign} name="logout" color="danger.500" size="xl" />
          </TouchableOpacity>
        )}
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
          ListEmptyComponent={() => (
            <Text fontFamily="body" fontSize={15} color="danger.500">
              No Task Found! Add one please
            </Text>
          )}
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
