import { ThemeProvider, Typography, IconButton } from "@mui/material";
import { StyledBox } from "../styled-components/StyledBox";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { appleSysUI } from "../assets/theme";

function SignUpFooter() {
  return (
    <StyledBox
      sx={{
        position: "absolute",
        bottom: "-50px",
        left: "0px",
        display: "flex",
        gap: "5px",
        alignItems: "center",
      }}
    >
      <ThemeProvider theme={appleSysUI}>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#A1A1A1",
          }}
        >
          © 2015 Acme, Inc.
        </Typography>
      </ThemeProvider>
      <Typography
        sx={{
          fontSize: "12px",
          color: "#A1A1A1",
        }}
      >
        Terms
      </Typography>
      <Typography
        sx={{
          fontSize: "12px",
          color: "#A1A1A1",
        }}
      >
        Privacy
      </Typography>
      <IconButton
        sx={{
          padding: 0,
        }}
      >
        <MoreHorizIcon
          sx={{
            color: "#A1A1A1",
          }}
        />
      </IconButton>
    </StyledBox>
  );
}

export default SignUpFooter;
