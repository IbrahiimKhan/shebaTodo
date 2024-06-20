// SignUpScreen.tsx
import {Header, Screen} from '@/components';
import useHandleAuthentication from '@/hooks/useHandleAuthentication';
import {signupSchema} from '@/schema/validationSchema';
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
import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';

type SignUpScreenProps = UnAuthenticatedStackNavigatorScreenProps<'Login'>;

export const SignUpScreen: FC<SignUpScreenProps> = ({navigation}) => {
  const {signUp} = useHandleAuthentication();

  const navigateToLogInScreen = () => {
    navigation.navigate('Login');
  };

  return (
    <Screen>
      <Header title="Sign Up" />
      <Image
        my={10}
        resizeMode="contain"
        alignSelf="center"
        source={require('@assets/images/logo.png')}
        size="xl"
        alt="logo"
      />
      <Box px={5} flex={1}>
        <Formik
          initialValues={{name: '', email: '', password: ''}}
          validationSchema={signupSchema}
          onSubmit={signUp}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <FormControl my={2} isInvalid={!!(errors.name && touched.name)}>
                <FormControl.Label>Your Name*</FormControl.Label>
                <Input
                  py={3}
                  placeholder="Enter your name"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                {errors.name && touched.name && (
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    {errors.name}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>

              <FormControl my={2} isInvalid={!!(errors.email && touched.email)}>
                <FormControl.Label>Your Email*</FormControl.Label>
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
                my={2}
                isInvalid={!!(errors.password && touched.password)}>
                <FormControl.Label>Your Password*</FormControl.Label>
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

              {errors?.general && (
                <Text color="red.500" mt={2}>
                  {errors?.general}
                </Text>
              )}

              <Button
                py={3}
                mt={5}
                background="blue.500"
                onPress={handleSubmit}>
                Sign Up
              </Button>
              <HStack mt={5}>
                <Text>Already Have an account? </Text>
                <TouchableOpacity onPress={navigateToLogInScreen}>
                  <Text color="blue.500" fontWeight="bold" fontFamily="body">
                    Sign In
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

export default SignUpScreen;
