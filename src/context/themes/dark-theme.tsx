import { createTheme } from '@material-ui/core';


const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#423E37',
      light: '#887B59',
      dark: '#211F1C',
      contrastText: '#EDEBD7',
    },
    secondary: {
      main: '#E3B23C',
      light: '#E6C163',
      dark: '#BB953B',
      contrastText: '#fefefe'
    },
    common: {
      black: '#000',
      white: '#FFF',
    },

  },
  spacing: (factor) => `${0.1 * factor}rem`,
});

export default darkTheme;