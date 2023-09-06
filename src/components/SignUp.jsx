import { Typography } from "@mui/material";
import SignUpForm from "./SignUpForm";
import { StyledSignUpSection } from "../styled-components/StyledSignUpSection";
import { StyledPaper } from "../styled-components/StyledPaper";
import SignUpFooter from "./SignUpFooter";

function SignUp() {
  return (
    <StyledSignUpSection item md={6} sm={12} xs={12}>
      <StyledPaper elevation={2}>
        <Typography
          variant="h1"
          sx={{ color: "#757575", fontSize: "30px", lineHeight: "30px" }}
        >
          Welcome to Acme.
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "#A1A1A1", fontSize: "14px", marginTop: "12px", lineHeight: '19px' }}
        >
          Create your account by filling the form bellow.
        </Typography>
        <SignUpForm />
        <SignUpFooter />
      </StyledPaper>
    </StyledSignUpSection>
  );
}

export default SignUp;
