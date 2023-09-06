import { Box } from "@mui/material";
import { StyledTextField } from "../styled-components/StyledTextField";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import { useState, memo, useCallback } from "react";
import zxcvbn from "zxcvbn";
import ShowPassword from "./ShowPassword";

function PasswordTextField({ onChange }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const testResult = zxcvbn(password);

  const handleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [setPassword, showPassword]);

  const handleChange = (e) => {
    onChange(e);
    setPassword(e.target.value);
  };

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <StyledTextField
        onChange={handleChange}
        name="password"
        variant="standard"
        label="Password"
        value={password}
        type={showPassword ? "text" : "password"}
        InputProps={{
          style: {
            color: "#757575",
            fontSize: "14px",
            lineHeight: "17px",
          },
        }}
      />
      <ShowPassword onClick={handleShowPassword} showPassword={showPassword} />
      <PasswordStrengthMeter strength={testResult.score} />
    </Box>
  );
}

export default memo(PasswordTextField);
