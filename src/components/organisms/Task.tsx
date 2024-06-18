import {AuthenticatedStackNavigatorParamList} from '@/types/navigation';
import {TaskProps} from '@/types/storeTypes';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Avatar, Badge, Box, Button, HStack, Icon, Text} from 'native-base';
import React, {FC, ReactElement} from 'react';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StaggerGroup} from '../atoms/transitions/StaggerGroup';

type TaskProp = TaskProps;
export const Task: FC<TaskProp> = (item): ReactElement => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<
        AuthenticatedStackNavigatorParamList,
        'ViewTask'
      >
    >();

  const navigateToTaskDetailsScreen = () => {
    navigation.navigate('ViewTask', item);
  };

  return (
    <Box
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      backgroundColor="white"
      borderWidth="2"
      mb={3}
      p={2}>
      <Badge
        alignSelf="flex-end"
        variant="solid"
        borderTopLeftRadius="none"
        borderBottomLeftRadius="xl"
        background={
          item.status === 'Completed'
            ? 'success.500'
            : item.status === 'In Progress'
            ? 'emerald.500'
            : 'gray.500'
        }
        position="absolute">
        {item.status}
      </Badge>
      <HStack flex={1} justifyContent="space-between">
        <Text fontFamily="body" fontSize={18} fontWeight="medium">
          {item?.title}
        </Text>
        <Box>
          <StaggerGroup id={item.id} />
        </Box>
      </HStack>
      {item.description ? (
        <Text fontFamily="body" fontSize={14} fontWeight="light">
          {item?.description}
        </Text>
      ) : null}
      <HStack my={2} space={2} alignItems="center">
        <Icon
          as={MaterialCommunityIcons}
          name="timer-sand"
          size="lg"
          color="danger.500"
        />
        <Text mt={1} fontWeight="bold" fontFamily="body">
          2024-06-17 5:30PM
        </Text>
      </HStack>
      <HStack justifyContent="space-between" alignItems="center" ml={4}>
        <Avatar.Group
          _avatar={{
            size: 'md',
          }}
          max={5}>
          {item?.img?.map((images, index) => {
            return <Avatar bg="blue.500" source={{uri: images}} key={index} />;
          })}
        </Avatar.Group>
        <Button
          onPress={navigateToTaskDetailsScreen}
          backgroundColor="blue.500"
          borderRadius={'full'}
          size=""
          paddingX={2}
          paddingY={1}
          variant="solid">
          View Task
        </Button>
      </HStack>
    </Box>
  );
};

export default Task;

const styles = StyleSheet.create({});
