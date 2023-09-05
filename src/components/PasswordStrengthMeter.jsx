import { Box, Tooltip } from "@mui/material";
import { memo } from "react";

const styles = {
  width: "5px",
  height: "5px",
  borderRadius: "50%",
};

const tooltipStyle = {
  tooltip: {
    sx: {
      color: "#0A96A3",
      background: "transparent",
      fontSize: "14px",
    },
  },
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
        gap: "3px",
      }}
    >
      <Tooltip
        title="Strong security"
        placement="right"
        componentsProps={tooltipStyle}
      >
        <div
          style={{
            ...styles,
            ...{ backgroundColor: strength > 3 ? "#0A96A3" : "#E0E0E0" },
          }}
        ></div>
      </Tooltip>
      <Tooltip title="Good security"
        placement="right"
        componentsProps={tooltipStyle}
      >
        <div
          style={{
            ...styles,
            ...{ backgroundColor: strength > 2 ? "#4A90E2" : "#E0E0E0" },
          }}
        ></div>
      </Tooltip>
      <Tooltip title="Medium security"
      placement="right"
      componentsProps={tooltipStyle}>
        <div
          style={{
            ...styles,
            ...{ backgroundColor: strength > 1 ? "#F9C466" : "#E0E0E0" },
          }}
        ></div>
      </Tooltip>
      <Tooltip title="Weak security"
        placement="right"
        componentsProps={{...tooltipStyle, ...{tooltip: {sx: {color: "#CD4146"}}}}}
      >
        <div
          style={{
            ...styles,
            ...{ backgroundColor: strength > 0 ? "#CD4146" : "#E0E0E0" },
          }}
        ></div>
      </Tooltip>
    </Box>
  );
}

export default memo(PasswordStrengthMeter);
