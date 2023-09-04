import { Box, IconButton } from "@mui/material";
import { StyledTextField } from "../styled-components/StyledTextField";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import { useState, useCallback, useEffect, memo } from "react";
import FaEye from "../images/fa-eye@2x.png";
import FaEyeSlash from "../images/fa-eye-slash@2x.png";

function PasswordTextField({ onChange, password }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOnChange = (e) => {
    onChange(e);
  };

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <StyledTextField
        onChange={handleOnChange}
        name="password"
        variant="standard"
        label="Password"
        value={password}
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
          bottom: "4px",
          right: "15px",
          color: "#757575",
          fontSize: "22px",
        }}
      >
        <img src={!showPassword ? FaEye : FaEyeSlash} width={22} height={16} />
      </IconButton>
      <Box
        sx={{
          position: "absolute",
          right: "2px",
          bottom: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <PasswordStrengthMeter />
      </Box>
    </Box>
  );
}

export default memo(PasswordTextField);
