import {Header, Screen} from '@/components';
import {
  Badge,
  Box,
  Button,
  FormControl,
  HStack,
  Icon,
  IconButton,
  Input,
  TextArea,
  VStack,
} from 'native-base';
import React, {ReactElement, useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

export const AddTaskScreen = (): ReactElement => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setSelectedDate(moment(date).format('MMMM Do YYYY, h:mm:ss a'));
    hideDatePicker();
  };

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
        <FormControl.Label>Choose Expiry Time</FormControl.Label>
        <HStack alignItems="center" space={2}>
          <IconButton
            onPress={showDatePicker}
            icon={
              <Icon
                as={Ionicons}
                size="10"
                name="calendar"
                _dark={{
                  color: 'blue.500',
                }}
                color="blue.500"
              />
            }
          />
          {selectedDate ? (
            <Badge variant="solid" background="blue.500" color={'white'}>
              {selectedDate}
            </Badge>
          ) : null}
        </HStack>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          onConfirm={handleConfirm}
          mode="datetime"
          onCancel={hideDatePicker}
        />
      </Box>
    </Screen>
  );
};

export default AddTaskScreen;
