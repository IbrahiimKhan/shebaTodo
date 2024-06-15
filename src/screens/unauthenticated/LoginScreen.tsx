import {Header, Screen} from '@/components';
import {UnAuthenticatedStackNavigatorScreenProps} from '@/types/navigation';
import {
  Box,
  Button,
  FormControl,
  HStack,
  Input,
  Text,
  WarningOutlineIcon,
} from 'native-base';
import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';

type LoginScreenProps = UnAuthenticatedStackNavigatorScreenProps<'Register'>;

export const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
  const navigateToLogInScreen = () => {
    navigation.navigate('Register');
  };
  return (
    <Screen>
      <Header title="Login In" right={() => <Box />} />
      <Box mx={5} flex={1} justifyContent="center">
        <Box flex={1} justifyContent="center">
          <FormControl w="100%" my={2}>
            <FormControl.Label>E-Mail</FormControl.Label>
            <Input py={3} placeholder="Enter password" />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Try different from previous passwords.
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl w="100%" my={2}>
            <FormControl.Label>Password</FormControl.Label>
            <Input placeholder="Enter password" py={3} />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Try different from previous passwords.
            </FormControl.ErrorMessage>
          </FormControl>
          <Button mt={5} background="blue.500" onPress={navigateToLogInScreen}>
            LogIn
          </Button>
          <HStack mt={5}>
            <Text>I don’t Have an account? </Text>
            <TouchableOpacity onPress={navigateToLogInScreen}>
              <Text color="blue.500" fontWeight="bold" fontFamily="body">
                Sign Up
              </Text>
            </TouchableOpacity>
          </HStack>
        </Box>
      </Box>
    </Screen>
  );
};

export default LoginScreen;
