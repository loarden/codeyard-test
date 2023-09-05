import { Box } from "@mui/material";
import { memo } from "react";

const styles = {
  width: "4px",
  height: "4px",
  borderRadius: "50%",
};

function PasswordStrengthMeter({ strength }) {
  return (
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
      <div
        style={{
          ...styles,
          ...{ backgroundColor: strength > 3 ? "#0A96A3" : "#E0E0E0" },
        }}
      ></div>
      <div
        style={{
          ...styles,
          ...{ backgroundColor: strength > 2 ? "#4A90E2" : "#E0E0E0" },
        }}
      ></div>
      <div
        style={{
          ...styles,
          ...{ backgroundColor: strength > 1 ? "#F9C466" : "#E0E0E0" },
        }}
      ></div>
      <div
        style={{
          ...styles,
          ...{ backgroundColor: strength > 0 ? "#CD4146" : "#E0E0E0" },
        }}
      ></div>
    </Box>
  );
}

export default memo(PasswordStrengthMeter);
