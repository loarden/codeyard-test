import { Grid } from "@mui/material";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

function App() {
  return (
    <Grid container sx={{height: '100vh'}}>
      <SignUp />
      <LogIn />
    </Grid>
  );
}

export default App;
