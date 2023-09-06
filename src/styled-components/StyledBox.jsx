import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    paddingLeft: "8px",
    paddingRight: "8px",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "0px",
  },
}));
