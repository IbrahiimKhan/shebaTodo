import {useStringHelper} from '@/helper/useStringHelper';
import {AuthenticatedStackNavigatorParamList} from '@/types/navigation';
import {TaskProps} from '@/types/storeTypes';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FlashList} from '@shopify/flash-list';
import {Badge, Box, HStack, Icon, Image, Text} from 'native-base';
import React, {FC, ReactElement} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
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

  const {titleCase} = useStringHelper();

  return (
    <TouchableOpacity onPress={navigateToTaskDetailsScreen}>
      <Badge
        variant="solid"
        borderRadius="md"
        alignSelf="flex-start"
        borderBottomRadius="none"
        background={
          item?.status === 'Completed'
            ? 'success.500'
            : item.status === 'In Progress'
            ? 'emerald.500'
            : 'gray.500'
        }>
        {item?.status}
      </Badge>
      <Box
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        backgroundColor="white"
        borderWidth="2"
        mb={3}
        p={2}>
        <HStack flex={1} justifyContent="space-between">
          <Text fontFamily="body" fontSize={18} fontWeight="medium">
            {titleCase(item?.title)}
          </Text>
          <Box>
            <StaggerGroup item={item} />
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
        <FlashList
          renderItem={({item}) => (
            <Image
              mb={3}
              alt="demo images"
              resizeMode="contain"
              width={100}
              height={100}
              source={{uri: item}}
            />
          )}
          estimatedItemSize={50}
          numColumns={4}
          data={item.img}
        />
      </Box>
    </TouchableOpacity>
  );
};

export default Task;

const styles = StyleSheet.create({});
