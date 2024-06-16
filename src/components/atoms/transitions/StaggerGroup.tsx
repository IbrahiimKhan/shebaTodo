import {
  Center,
  HStack,
  Icon,
  IconButton,
  Stagger,
  useDisclose,
} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const StaggerGroup = () => {
  const {isOpen, onToggle} = useDisclose();
  return (
    <Center position="absolute" right={0} top={5}>
      <HStack>
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
          <IconButton
            variant="solid"
            bg="success.500"
            colorScheme="success"
            borderRadius="full"
            mr={3}
            icon={
              <Icon
                as={MaterialIcons}
                size="4"
                name="check"
                _dark={{
                  color: 'warmGray.50',
                }}
                color="warmGray.50"
              />
            }
          />
          <IconButton
            variant="solid"
            bg="red.500"
            colorScheme="red"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialIcons}
                size="4"
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
          p={1}
          borderRadius="full"
          size="lg"
          onPress={onToggle}
          icon={
            <Icon as={MaterialCommunityIcons} size="6" name="dots-horizontal" />
          }
        />
      </HStack>
    </Center>
  );
};
