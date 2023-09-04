import { FormControlLabel, Checkbox, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { memo } from "react";

function FormControlCheckbox ({ onChange, isChecked }) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          onClick={(e) => onChange(e)}
          checked={isChecked}
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
  );
}

export default memo(FormControlCheckbox);
