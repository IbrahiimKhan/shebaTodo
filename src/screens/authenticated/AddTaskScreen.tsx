import {Header, Screen} from '@/components';
import {Box, FormControl, Input, TextArea} from 'native-base';
import React, {ReactElement} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

export const AddTaskScreen = (): ReactElement => {
  return (
    <Screen>
      <Header title="Add Task" />
      <Box flex={1} mx={5}>
        <FormControl mb="5">
          <FormControl.Label>Task Name *</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl mb="5">
          <FormControl.Label>Task Name</FormControl.Label>
          <TextArea h={20} placeholder="Text Area Placeholder" />
        </FormControl>
        <FormControl.Label>Expiry Time</FormControl.Label>
      </Box>
    </Screen>
  );
};

export default AddTaskScreen;
