import { createTheme } from '@material-ui/core';


const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    }
  },
  spacing: (factor) => `${0.1 * factor}rem`,
})

export default lightTheme;