import {DatePicker, Header, ImagePicker, Screen} from '@/components';
import useTaskStore from '@/store/useTaskStore';
import {taskSchema} from '@/schema/validationSchema';
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
import {AuthenticatedStackNavigatorScreenProps} from '@/types/navigation';
import {TaskProps} from '@/types/taskTypes';
import Toast from 'react-native-toast-message';

interface ViewTaskScreenProps
  extends AuthenticatedStackNavigatorScreenProps<'ViewTask'> {}

export const ViewTaskScreen: FC<ViewTaskScreenProps> = ({
  route,
}): ReactElement => {
  const task = route?.params;
  const [selectedImages, setSelectedImages] = useState<string[]>(task.img);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date(task.expiryDate),
  );

  const updateTask = useTaskStore(state => state.updateTask);

  return (
    <Screen>
      <Header title="Task Details" />
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
          initialValues={{
            title: task.title,
            description: task.description,
            expiryDate: task.expiryDate,
            img: task.img,
          }}
          validationSchema={taskSchema}
          onSubmit={values => {
            const updatedTask: Partial<TaskProps> = {
              title: values.title,
              description: values.description,
              expiryDate: selectedDate!,
              img: selectedImages,
            };
            updateTask(task.id, updatedTask);
            Toast.show({text1: 'Task Updated Successfully'});
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
                  initialDate={selectedDate}
                  handlSelectDate={(date: Date) => {
                    setSelectedDate(date);
                    setFieldValue('expiryDate', date.toISOString());
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
                  initialImages={selectedImages}
                  handleSelectedImages={(images: string[]) => {
                    setSelectedImages(images);
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
                Update Task
              </Button>
            </Box>
          )}
        </Formik>
      </ScrollView>
    </Screen>
  );
};

export default ViewTaskScreen;
