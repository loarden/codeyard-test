import { Box } from "@mui/material";
import { memo } from "react";
import { StyledStrengthBox } from "../styled-components/StyledStrengthBox";

function PasswordStrengthMeter({ strength }) {
  return (
    <Box
      sx={{
        position: "absolute",
        right: "2px",
        bottom: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "3px",
      }}
    >
      <StyledStrengthBox
        sx={{ backgroundColor: strength > 3 ? "#0A96A3" : "#E0E0E0" }}
      />
      <StyledStrengthBox
        sx={{ backgroundColor: strength > 2 ? "#4A90E2" : "#E0E0E0" }}
      />
      <StyledStrengthBox
        sx={{ backgroundColor: strength > 1 ? "#F9C466" : "#E0E0E0" }}
      />
      <StyledStrengthBox
        sx={{ backgroundColor: strength > 0 ? "#CD4146" : "#E0E0E0" }}
      />
    </Box>
  );
}

export default memo(PasswordStrengthMeter);
