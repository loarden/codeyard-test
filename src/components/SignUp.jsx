import {
  Grid,
  IconButton,
  Paper,
  ThemeProvider,
  Typography,
  Box,
} from "@mui/material";
import { appleSysUI } from "../assets/theme";
import SignUpForm from "./SignUpForm";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function SignUp() {
  console.log('sign up render...')

  return (
    <Grid
      item
      sm={6}
      sx={{
        backgroundColor: "#F7F7F7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          position: "relative",
          width: "380px",
          borderRadius: "12px",
          padding: "30px",
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h1"
          sx={{ color: "#757575", fontSize: "30px", lineHeight: "30px" }}
        >
          Welcome to Acme.
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "#A1A1A1", fontSize: "14px", marginTop: "12px" }}
        >
          Create your account by filling the form bellow.
        </Typography>
        <ThemeProvider theme={appleSysUI}>
          <SignUpForm />
        </ThemeProvider>
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            left: "0px",
            display: "flex",
            gap: '5px',
            alignItems: "center",
          }}
        >
          <ThemeProvider theme={appleSysUI}>
            <Typography
              sx={{
                fontSize: "12px",
                color: "#A1A1A1",
              }}
            >
              © 2015 Acme, Inc.
            </Typography>
          </ThemeProvider>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#A1A1A1",
            }}
          >
            Terms
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#A1A1A1",
            }}
          >
            Privacy
          </Typography>
          <IconButton sx={{
            padding: 0
          }}>
            <MoreHorizIcon sx={{
              color: '#A1A1A1',
            }}/>
          </IconButton>
        </Box>
      </Paper>
    </Grid>
  );
}

export default SignUp;
