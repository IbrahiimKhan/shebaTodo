import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

export const signupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

export const taskSchema = Yup.object().shape({
  title: Yup.string().required('Task name is required'),
  description: Yup.string(),
  expiryDate: Yup.date().required('Expiry date is required'),
  img: Yup.array().min(1, 'At least one image is required'),
});
