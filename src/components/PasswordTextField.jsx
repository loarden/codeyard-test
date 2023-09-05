import { Box, IconButton } from "@mui/material";
import { StyledTextField } from "../styled-components/StyledTextField";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import { useState, useCallback, useEffect, memo, useRef } from "react";
import FaEye from "../images/fa-eye@2x.png";
import FaEyeSlash from "../images/fa-eye-slash@2x.png";

function PasswordTextField({ onChange }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <StyledTextField
        onChange={(e) => setPassword(e.target.value)}
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
        <PasswordStrengthMeter password={password} />
    </Box>
  );
}

export default memo(PasswordTextField);
