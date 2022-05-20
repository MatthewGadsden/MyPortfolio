import { createTheme } from '@material-ui/core';


const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#1b1b1b',
      light: '#464646',
      dark: '#090909',
      contrastText: '#fefefe',
    },
    secondary: {
      // main: '#F50057'
    }
  },
  spacing: (factor) => `${0.1 * factor}rem`,
})

export default darkTheme;