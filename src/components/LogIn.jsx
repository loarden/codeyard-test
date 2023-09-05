import { Button, Grid } from "@mui/material";
import { useFormContext } from "../hooks/useFormContext";
import axios from "axios";
import { useCallback } from "react";
import { StyledLgInButton } from "../styled-components/StyledLogInButton";

function LogIn() {
  const { form } = useFormContext();

  const loginHandler = async () => {
    const res = await axios({
      method: "POST",
      url: "https://us-central1-ria-server-b1103.cloudfunctions.net/authenticate",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        data: {
          email: form.email,
          password: form.password,
        },
      },
    });
    console.log(res.data.result);
  };

  return (
    <Grid
      item
      sm={6}
      sx={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1838017/pexels-photo-1838017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        "&::before": {
          content: '" "',
          position: "absolute",
          width: "100%",
          height: "100%",
          backdropFilter: "blur(10px)",
        },
      }}
    >
      <StyledLgInButton variant="outlined" onClick={loginHandler}>
        Log in
      </StyledLgInButton>
    </Grid>
  );
}

export default LogIn;
