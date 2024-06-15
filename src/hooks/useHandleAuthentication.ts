import useAuthStore from '@/store/useAuthStore';
import {UnAuthenticatedStackNavigatorParamList} from '@/types/navigation';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useCallback} from 'react';
import Toast from 'react-native-toast-message';

const useHandleAuthentication = () => {
  const onLoginSuccess = useAuthStore(state => state.onLoginSuccess);
  const navigation =
    useNavigation<
      NativeStackNavigationProp<UnAuthenticatedStackNavigatorParamList, 'Login'>
    >();

  const signUp = useCallback(
    async (values, actions) => {
      try {
        const userCredential = await auth().createUserWithEmailAndPassword(
          values.email,
          values.password,
        );
        const user = userCredential?.user;
        await user?.updateProfile({
          displayName: values.name,
        });

        Toast.show({
          type: 'success',
          text1: 'Signup Successful',
        });
        navigation.navigate('Login');
      } catch (error: any) {
        const errorMsg = error.code?.replace('auth/', '').split('-').join(' ');
        actions.setFieldError('general', errorMsg);
      }
    },
    [navigation],
  );

  const signIn = useCallback(
    async (values, actions) => {
      try {
        const userCredential = await auth().signInWithEmailAndPassword(
          values.email,
          values.password,
        );
        const {user} = userCredential;
        const loggedInUser = {
          name: user?.displayName || '',
          email: user?.email || '',
          uuid: user?.uid || '',
          token: await user?.getIdToken(),
        };

        Toast.show({
          type: 'success',
          text1: 'Login Successful',
        });
        onLoginSuccess(loggedInUser);
      } catch (error) {
        actions.setFieldError('general', 'Invalid Credentials');
      }
    },
    [onLoginSuccess],
  );

  return {signUp, signIn};
};

export default useHandleAuthentication;
