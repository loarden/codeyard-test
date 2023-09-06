import { StyledLgInButton } from "../styled-components/StyledLogInButton";
import { ThemeProvider, Typography } from "@mui/material";
import { useFormContext } from "../hooks/useFormContext";
import { appleSysUI } from "../assets/theme";
import AcmeLogo from "../images/acme.png";
import axios from "axios";
import { StyledLoginSection } from "../styled-components/StyledLoginSection";
import { StyledLogInBox } from "../styled-components/StyledLoginBox";

function LogIn() {
  const { form } = useFormContext();

  const handleLogIn = async () => {
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
    <StyledLoginSection
      item 
      md={6} 
      sm={12} 
      xs={12}>
      <StyledLogInBox>
        <img src={AcmeLogo} alt={AcmeLogo} />
        <Typography
          variant="h2"
          sx={{
            color: "#FFFFFF",
            fontSize: "30px",
            lineHeight: "44px",
            marginTop: "30px",
          }}
        >
          Do you already have an account?
        </Typography>
        <ThemeProvider theme={appleSysUI}>
          <Typography
            variant="h4"
            sx={{
              color: "#FFFFFF",
              fontSize: "14px",
              lineHeight: "30px",
              marginTop: "14px",
              marginBottom: "14px",
            }}
          >
            That's awesome! You can login by clicking on the button below. To
            skip this next time, you can ask us to remember your login
            credentials.
          </Typography>
        </ThemeProvider>
        <StyledLgInButton variant="outlined" onClick={handleLogIn}>
          Log in
        </StyledLgInButton>
      </StyledLogInBox>
    </StyledLoginSection>
  );
}

export default LogIn;
