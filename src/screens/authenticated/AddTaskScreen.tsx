import {DatePicker, Header, ImagePicker, Screen} from '@/components';
import {Box, FormControl, Input, TextArea} from 'native-base';
import React, {ReactElement, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

export const AddTaskScreen = (): ReactElement => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<any>('');

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
        <DatePicker handlSelectDate={(date: Date) => setSelectedDate(date)} />
        <ImagePicker
          handleSelectedImages={images => setSelectedImages(images)}
        />
      </Box>
    </Screen>
  );
};

export default AddTaskScreen;
