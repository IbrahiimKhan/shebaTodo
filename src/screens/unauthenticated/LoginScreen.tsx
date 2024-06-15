// LoginScreen.tsx
import {UnAuthenticatedStackNavigatorScreenProps} from '@/types/navigation';
import {Formik} from 'formik';
import {
  Box,
  Button,
  FormControl,
  HStack,
  Image,
  Input,
  Text,
  WarningOutlineIcon,
} from 'native-base';
import React from 'react';

import useHandleAuthentication from '@/hooks/useHandleAuthentication';
import {loginSchema} from '@/schema/validationSchema';
import {Header, Screen} from '@/components';
import {TouchableOpacity} from 'react-native';

type LoginScreenProps = UnAuthenticatedStackNavigatorScreenProps<'Login'>;

export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const {signIn} = useHandleAuthentication();

  const navigateToSignUpScreen = () => {
    navigation.goBack();
  };

  return (
    <Screen>
      <Header title="Log In" />
      <Image
        my={10}
        resizeMode="contain"
        alignSelf="center"
        source={require('@assets/images/logo.png')}
        size="xl"
        alt="logo"
      />
      <Box mx={5}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={loginSchema}
          onSubmit={signIn}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <FormControl my={3} isInvalid={!!(errors.email && touched.email)}>
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  py={3}
                  placeholder="Enter email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    {errors.email}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>

              <FormControl
                my={3}
                isInvalid={!!(errors.password && touched.password)}>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  py={3}
                  placeholder="Enter password"
                  type="password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    {errors.password}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>

              {errors.general && (
                <Text color="red.500" mt={2}>
                  {errors.general}
                </Text>
              )}

              <Button
                py={3}
                fontFamily="body"
                mt={5}
                background="blue.500"
                onPress={handleSubmit}>
                Log In
              </Button>
              <HStack mt={5}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={navigateToSignUpScreen}>
                  <Text color="blue.500" fontWeight="bold" fontFamily="body">
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </HStack>
            </>
          )}
        </Formik>
      </Box>
    </Screen>
  );
};

export default LoginScreen;
