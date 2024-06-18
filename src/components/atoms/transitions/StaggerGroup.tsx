import useTaskStore from '@/store/useTaskStore';
import {TaskProps} from '@/types/taskTypes';
import {Box, HStack, Icon, IconButton, Stagger, useDisclose} from 'native-base';
import React, {FC} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type StaggerGroupProps = {
  item: TaskProps;
};
export const StaggerGroup: FC<StaggerGroupProps> = ({item}) => {
  const {isOpen, onToggle} = useDisclose();
  const {deleteTask, updateTask} = useTaskStore();
  return (
    <HStack space={3}>
      <Stagger
        visible={isOpen}
        initial={{
          opacity: 0,
          scale: 0,
          translateX: 34,
        }}
        animate={{
          translateY: 0,
          scale: 1,
          opacity: 1,
          transition: {
            type: 'spring',
            mass: 0.8,
            stagger: {
              offset: 30,
              reverse: true,
            },
          },
        }}
        exit={{
          translateX: 34,
          scale: 0.5,
          opacity: 0,
          transition: {
            duration: 100,
            stagger: {
              offset: 30,
              reverse: true,
            },
          },
        }}>
        <Box>
          {item.status !== 'Completed' ? (
            <IconButton
              onPress={() => {
                const updatedStatus: Partial<TaskProps> = {
                  status: 'Completed',
                };
                updateTask(item.id, updatedStatus);
                onToggle();
              }}
              variant="solid"
              bg="success.500"
              colorScheme="success"
              borderRadius="full"
              mr={3}
              icon={
                <Icon
                  as={MaterialIcons}
                  size="md"
                  name="check"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="warmGray.50"
                />
              }
            />
          ) : null}
        </Box>
        <IconButton
          onPress={() => {
            deleteTask(item.id);
            onToggle();
          }}
          variant="solid"
          bg="red.500"
          colorScheme="red"
          borderRadius="full"
          icon={
            <Icon
              as={MaterialIcons}
              size="md"
              name="delete"
              _dark={{
                color: 'warmGray.50',
              }}
              color="warmGray.50"
            />
          }
        />
      </Stagger>
      <IconButton
        variant="outline"
        onPress={onToggle}
        paddingY={0}
        borderRadius="full"
        borderColor="gray.400"
        icon={
          <Icon
            as={MaterialCommunityIcons}
            color="black"
            size="md"
            name="dots-horizontal"
          />
        }
      />
    </HStack>
  );
};
