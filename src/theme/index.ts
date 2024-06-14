import {extendTheme} from 'native-base';

export const customTheme = extendTheme({
  fontConfig: {
    Poppins: {
      300: {
        normal: 'Poppins-Light',
      },
      400: {
        normal: 'Poppins-Regular',
      },
      500: {
        normal: 'Poppins-Medium',
      },
      600: {
        normal: 'Poppins-SemiBold',
      },
      700: {
        normal: 'Poppins-Bold',
      },
      800: {
        normal: 'Poppins-ExtraBold',
      },
    },
  },

  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    liti: 'Poppins',
  },
});
