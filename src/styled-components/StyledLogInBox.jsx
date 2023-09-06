import { styled } from "@mui/material";
import { StyledBox } from "./StyledBox";

export const StyledLogInBox = styled(StyledBox)(({ theme }) => ({
  position: "relative",
  maxWidth: "380px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    bottom: "0px",
  },
  [theme.breakpoints.up("md")]: {
    bottom: "64px",
  },
}));
