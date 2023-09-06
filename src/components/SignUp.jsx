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
import { StyledBox } from "../styled-components/StyledBox";
import { memo } from "react";
import { StyledSignUpSection } from "../styled-components/StyledSignUpSection";
import { StyledPaper } from "../styled-components/StyledPaper";

function SignUp() {
  return (
    <StyledSignUpSection
      item
      md={6}
      sm={12}
      xs={12}
    >
      <StyledPaper
        elevation={2}
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
        <SignUpForm />
        <StyledBox
          sx={{
            position: "absolute",
            bottom: "-50px",
            left: "0px",
            display: "flex",
            gap: "5px",
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
          <IconButton
            sx={{
              padding: 0,
            }}
          >
            <MoreHorizIcon
              sx={{
                color: "#A1A1A1",
              }}
            />
          </IconButton>
        </StyledBox>
      </StyledPaper>
    </StyledSignUpSection>
  );
}

export default memo(SignUp);
