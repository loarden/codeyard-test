import { Grid, ThemeProvider } from "@mui/material";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import { openSans } from "./assets/theme";

function App() {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <ThemeProvider theme={openSans}>
        <SignUp />
        <LogIn />
      </ThemeProvider>
    </Grid>
  );
}

export default App;
