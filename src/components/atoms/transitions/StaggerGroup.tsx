import useTaskStore from '@/store/useTaskStore';
import {TaskProps} from '@/types/taskTypes';
import {Box, HStack, Icon, Stagger, theme, useDisclose} from 'native-base';
import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
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
            <TouchableOpacity
              onPress={() => {
                const updatedStatus: Partial<TaskProps> = {
                  status: 'Completed',
                };
                updateTask(item.id, updatedStatus);
                onToggle();
              }}>
              <Icon
                as={MaterialIcons}
                size="xl"
                name="check-circle"
                _dark={{
                  color: 'success.500',
                }}
                color="success.500"
              />
            </TouchableOpacity>
          ) : null}
        </Box>
        <TouchableOpacity
          onPress={() => {
            deleteTask(item.id);
            onToggle();
          }}>
          <Icon
            as={MaterialCommunityIcons}
            size="xl"
            name="delete-circle"
            _dark={{
              color: 'danger.500',
            }}
            color="danger.500"
          />
        </TouchableOpacity>
      </Stagger>
      <TouchableOpacity onPress={onToggle} style={styles.pressable}>
        <Icon
          as={MaterialCommunityIcons}
          color="black"
          size="lg"
          name="dots-horizontal"
        />
      </TouchableOpacity>
    </HStack>
  );
};

const styles = StyleSheet.create({
  pressable: {
    borderColor: theme.colors.gray[200],
    borderWidth: 1,
    borderRadius: 100,
  },
});
