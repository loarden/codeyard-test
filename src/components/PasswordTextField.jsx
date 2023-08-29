import { Box, IconButton } from "@mui/material"
import { FaEye, FaEyeSlash } from "react-icons/fa6"
import { StyledTextField } from "../styled-components/StyledTextField"
import PasswordStrengthMeter from "./PasswordStrengthMeter"
import { useState, useCallback, useEffect, memo } from "react"
import zxcvbn from "zxcvbn"

function PasswordTextField ({ onChange, password }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleOnChange = (e) => {
    onChange(e)
  }

  console.log('password render..')

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
        bottom: "0px",
        right: "15px",
        color: "#757575",
        fontSize: "22px",
      }}
    >
      {!showPassword ? <FaEye /> : <FaEyeSlash />}
    </IconButton>
    <Box sx={{
      position: 'absolute',
      right: '2px',
      bottom: '8px',
      display: 'flex',
      flexDirection: 'column',
      gap: '3px'
    }}>
      <PasswordStrengthMeter 
      />
    </Box>
  </Box>
  )
}

export default PasswordTextField