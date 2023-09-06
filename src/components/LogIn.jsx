import { Box, Button, Grid, ThemeProvider, Typography } from "@mui/material";
import { useFormContext } from "../hooks/useFormContext";
import axios from "axios";
import AcmeLogo from "../images/acme.png";
import backgroundImage from '../images/pexels-vlad-chețan-1838017.jpg'
import { useCallback, memo } from "react";
import { StyledLgInButton } from "../styled-components/StyledLogInButton";
import { appleSysUI } from "../assets/theme";
import { StyledBox } from "../styled-components/StyledBox";

function LogIn() {
  const { form } = useFormContext();

  const loginHandler = async () => {
    const res = await axios({
      method: "POST",
      url: "https://us-central1-ria-server-b1103.cloudfunctions.net/authenticate",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        data: {
          email: form.email,
          password: form.password,
        },
      },
    });
    console.log(res.data.result);
  };

  return (
    <Grid
      item
      md={6}
      sm={12}
      xs={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        width: '100%',
        minHeight: '100vh',
        height: '100%',
        "&::before": {
          content: '" "',
          position: "absolute",
          width: "100%",
          minHeight: "100vh",
          backdropFilter: "blur(10px)",
        },
      }}
    >
      <StyledBox
        sx={{
          position: "relative",
          maxWidth: "380px",
          width: '100%',
          bottom: '64px'
        }}
      >
        <img src={AcmeLogo} alt={AcmeLogo} />
        <Typography
          variant="h2"
          sx={{ color: "#FFFFFF", fontSize: "30px", lineHeight: "44px", marginTop: '30px' }}
        >
          Do you already have an account?
        </Typography>
        <ThemeProvider theme={appleSysUI}>
        <Typography
          variant="h4"
          sx={{ color: "#FFFFFF", fontSize: "14px", lineHeight: "30px", marginTop: '14px', marginBottom: '14px' }}
        >
          That's awesome! You can login by clicking on the button below. To skip
          this next time, you can ask us to remember your login credentials.
        </Typography>
        </ThemeProvider>
        <StyledLgInButton variant="outlined" onClick={loginHandler}>
          Log in
        </StyledLgInButton>
      </StyledBox>
    </Grid>
  );
}

export default memo(LogIn);
