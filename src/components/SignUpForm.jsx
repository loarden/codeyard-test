import {
  Checkbox,
  FormControl,
  FormControlLabel,
  ThemeProvider,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import { appleSysUI, openSans } from "../assets/theme";
import { StyledTextField } from "../styled-components/StyledTextField";
import { StyledSignUpButton } from "../styled-components/StyledSignUpButton";
import CircleIcon from "@mui/icons-material/Circle";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { useState } from "react";

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ThemeProvider theme={appleSysUI}>
      <FormControl
        sx={{ width: "100%", marginTop: "30px", display: "grid", gap: "20px" }}
      >
        <StyledTextField
          variant="standard"
          label="Email"
          type="email"
          InputProps={{
            style: {
              color: "#757575",
              fontSize: "14px",
            },
          }}
        />
        <Box
          sx={{
            position: "relative",
          }}
        >
          <StyledTextField
            variant="standard"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              style: {
                color: "#757575",
                fontSize: "14px",
              },
            }}
          />
          <IconButton
            onClick={handleShowPassword}
            sx={{
              position: "absolute",
              bottom: "0px",
              right: "15px",
              color: "#757575",
              fontSize: "22px",
            }}
          >
            {!showPassword ? (
              <FaEye style={{ color: "#757575" }} />
            ) : (
              <FaEyeSlash />
            )}
          </IconButton>
        </Box>
        <FormControlLabel
          control={
            <Checkbox
              icon={<CircleIcon sx={{ color: "#A1A1A1" }} />}
              checkedIcon={<CircleIcon sx={{ color: "#4A90E2" }} />}
              size="small"
            />
          }
          label={
            <Typography sx={{ color: "#A1A1A1", fontSize: "14px" }}>
              Remember me.
            </Typography>
          }
          sx={{
            justifySelf: "start",
          }}
        />
        <ThemeProvider theme={openSans}>
          <StyledSignUpButton variant="contained" disableElevation>
            Sign up
          </StyledSignUpButton>
        </ThemeProvider>
      </FormControl>
    </ThemeProvider>
  );
}

export default SignUpForm;
