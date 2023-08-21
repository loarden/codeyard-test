import { Grid, Paper, ThemeProvider, Typography } from "@mui/material";
import { openSans } from "../assets/theme";
import { ThemeContext } from "@emotion/react";
import SignUpForm from "./SignUpForm";

function SignUp() {
  return (
    <Grid
      item
      sm={6}
      component={Paper}
      sx={{
        backgroundColor: "#F7F7F7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "380px",
          borderRadius: "12px",
          padding: "30px",
          boxSizing: "border-box",
        }}
      >
        <ThemeProvider theme={openSans}>
          <Typography variant="h1" sx={{ color: "#757575", fontSize: "30px", lineHeight: '30px'}}>
            Welcome to Acme.
          </Typography>
          <Typography variant="h6" sx={{ color: "#A1A1A1", fontSize: '14px', marginTop: '10px'}}>
            Create your account by filling the form bellow.
          </Typography>
          <SignUpForm />
        </ThemeProvider>
      </Paper>
    </Grid>
  );
}

export default SignUp;
