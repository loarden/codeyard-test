import { styled, Grid } from "@mui/material";
import backgroundImage from "../images/pexels-vlad-chețan-1838017.jpg";

export const StyledLoginSection = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  height: "auto",
  "&::before": {
    content: '" "',
    position: "absolute",
    width: "100%",
    minHeight: "100%",
    height: "auto",
    backdropFilter: "blur(10px)",
  },
});
