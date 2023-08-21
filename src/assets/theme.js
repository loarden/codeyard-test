import { createTheme } from "@mui/material";

export const openSans = createTheme({
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
});


export const appleSysUI = createTheme({
  typography: {
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif']. join(','),
  }
})