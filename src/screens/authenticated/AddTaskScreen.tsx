import {DatePicker, Header, ImagePicker, Screen} from '@/components';
import {
  Box,
  Button,
  FormControl,
  Input,
  ScrollView,
  TextArea,
} from 'native-base';
import React, {ReactElement, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

export const AddTaskScreen = (): ReactElement => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<any>('');

  return (
    <Screen>
      <Header title="Add Task" />
      <ScrollView
        flex={1}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
        mx={5}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Box>
          <FormControl mb="5">
            <FormControl.Label>Task Name *</FormControl.Label>
            <Input placeholder="Web Development" />
          </FormControl>
          <FormControl mb="5">
            <FormControl.Label>Task Name</FormControl.Label>
            <TextArea h={20} placeholder="Task description" />
          </FormControl>
          <DatePicker handlSelectDate={(date: Date) => setSelectedDate(date)} />
          <ImagePicker
            handleSelectedImages={images => setSelectedImages(images)}
          />
        </Box>
        <Button mb={5}>Add Task</Button>
      </ScrollView>
    </Screen>
  );
};

export default AddTaskScreen;
