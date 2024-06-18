import {DatePicker, Header, ImagePicker, Screen} from '@/components';
import {taskSchema} from '@/schema/validationSchema';
import useTaskStore, {TaskProps} from '@/store/useTaskStore';
import {HomeStackScreenProps} from '@/types/navigation';
import {Formik} from 'formik';
import {
  Box,
  Button,
  FormControl,
  Input,
  ScrollView,
  TextArea,
} from 'native-base';
import React, {FC, ReactElement, useState} from 'react';
import Toast from 'react-native-toast-message';

interface AddTaskScreenProps extends HomeStackScreenProps<'Home'> {}

export const AddTaskScreen: FC<AddTaskScreenProps> = ({
  navigation,
}): ReactElement => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const createTask = useTaskStore(state => state.createTask);

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
        <Formik
          initialValues={{title: '', description: '', expiryDate: '', img: []}}
          validationSchema={taskSchema}
          onSubmit={(values, {resetForm}) => {
            const newTask: TaskProps = {
              id: Date.now(),
              title: values.title,
              description: values.description,
              expiryDate: selectedDate!,
              status: 'todo',
              img: values.img,
            };
            createTask(newTask);
            resetForm();
            setSelectedImages([]);
            setSelectedDate(null);
            Toast.show({text1: 'Task Added Successfully!'});
            navigation.navigate('Root');
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <Box>
              <FormControl mb="5" isInvalid={!!(errors.title && touched.title)}>
                <FormControl.Label>Task Name *</FormControl.Label>
                <Input
                  placeholder="Web Development"
                  onChangeText={handleChange('title')}
                  onBlur={handleBlur('title')}
                  value={values.title}
                />
                {errors.title && touched.title && (
                  <FormControl.ErrorMessage>
                    {errors.title}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>
              <FormControl
                mb="5"
                isInvalid={!!(errors.description && touched.description)}>
                <FormControl.Label>Task Description</FormControl.Label>
                <TextArea
                  h={20}
                  placeholder="Task description"
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  value={values.description}
                  autoCompleteType={undefined}
                />
                {errors.description && touched.description && (
                  <FormControl.ErrorMessage>
                    {errors.description}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>
              <FormControl
                mb="5"
                isInvalid={!!(errors.expiryDate && touched.expiryDate)}>
                <DatePicker
                  handlSelectDate={(date: Date) => {
                    setSelectedDate(date);
                    handleChange('expiryDate')(date.toString());
                  }}
                />
                {errors.expiryDate && touched.expiryDate && (
                  <FormControl.ErrorMessage>
                    {errors.expiryDate}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>
              <FormControl mb="5" isInvalid={!!(errors.img && touched.img)}>
                <ImagePicker
                  handleSelectedImages={function (images: string[]): void {
                    console.log(images);
                    setFieldValue('img', images);
                  }}
                />
                {errors.img && touched.img && (
                  <FormControl.ErrorMessage>
                    {errors.img}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>
              <Button onPress={handleSubmit as any} mb={5}>
                Add Task
              </Button>
            </Box>
          )}
        </Formik>
      </ScrollView>
    </Screen>
  );
};

export default AddTaskScreen;
