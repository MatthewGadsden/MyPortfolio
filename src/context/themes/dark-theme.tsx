import { createTheme } from '@material-ui/core';


const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#35CE8D',
      light: '#79D3A2',
      dark: '#289B69',
      contrastText: '#fefefe',
    },
    secondary: {
      main: '#C1956D',
      light: '#D2AE93',
      dark: '#A57D58',
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