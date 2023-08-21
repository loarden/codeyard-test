import { Button, Checkbox, FormControl, FormControlLabel, TextField, ThemeProvider } from "@mui/material";
import { appleSysUI } from "../assets/theme";

function SignUpForm() {
  return (
    <ThemeProvider theme={appleSysUI}>
      <FormControl sx={{ width: "100%", marginTop: "30px", display: 'grid', gap: '20px' }}>
        <TextField variant="standard" label="Email" type="email"/>
        <TextField variant="standard" label="Password" type="password"/>
        <FormControlLabel control={<Checkbox />} label='Remember me' />
        <Button variant="contained" disableElevation sx={{justifySelf: 'end'}}>Sign up</Button>
      </FormControl>
    </ThemeProvider>
  );
}

export default SignUpForm;
