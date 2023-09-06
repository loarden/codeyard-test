import FaEyeSlash from "../images/fa-eye-slash@2x.png";
import FaEye from "../images/fa-eye@2x.png";
import { IconButton } from "@mui/material";
import { memo } from "react";

function ShowPassword({ onClick, showPassword }) {
  return (
    <IconButton
      onClick={() => onClick()}
      sx={{
        position: "absolute",
        bottom: "4px",
        right: "15px",
      }}
    >
      <img src={!showPassword ? FaEye : FaEyeSlash} width={22} height={16} />
    </IconButton>
  );
}

export default memo(ShowPassword);
