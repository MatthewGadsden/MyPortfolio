import { createTheme } from '@material-ui/core';


const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#010101'
    }
  },
  spacing: (factor) => `${0.1 * factor}rem`,
})

export default darkTheme;