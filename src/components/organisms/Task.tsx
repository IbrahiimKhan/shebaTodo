import {Avatar, Badge, Box, HStack, Icon, IconButton, Text} from 'native-base';
import React, {FC, ReactElement} from 'react';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StaggerGroup} from '../atoms/transitions/StaggerGroup';
import {TaskProps} from '@/types/taskTypes';

type TaskProp = TaskProps;
export const Task: FC<TaskProp> = (): ReactElement => {
  return (
    <Box
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="2"
      mb={3}
      px={2}
      py={4}>
      <Badge
        alignSelf="flex-end"
        variant="solid"
        background="blue.500"
        position="absolute">
        High
      </Badge>
      <HStack>
        <Text fontFamily="body" fontSize={18} fontWeight="medium">
          App Development
        </Text>
        <StaggerGroup />
      </HStack>
      <Text fontFamily="body" fontSize={12} fontWeight="light">
        Description of app development
      </Text>
      <HStack my={2} space={2} alignItems="center">
        <Icon as={Ionicons} name="calendar" size="md" color="blue.500" />
        <Text mt={1} fontWeight="bold" fontFamily="body">
          2024-06-17 5:30PM
        </Text>
      </HStack>
      <HStack justifyContent="space-between">
        <Avatar source={require('@assets/images/avatar.jpg')} />
      </HStack>
      <Badge
        alignSelf="flex-end"
        variant="solid"
        background="blue.300"
        position="absolute"
        bottom={-1}
        right={-5}
        borderRadius="full">
        <IconButton
          padding={0}
          icon={
            <Icon
              as={MaterialIcons}
              size="5"
              name="double-arrow"
              _dark={{
                color: 'warmGray.50',
              }}
              color="warmGray.50"
            />
          }
        />
      </Badge>
    </Box>
  );
};

export default Task;

const styles = StyleSheet.create({});
