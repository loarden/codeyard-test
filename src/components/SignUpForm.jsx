import {
  FormControl,
  ThemeProvider,
} from "@mui/material";
import { appleSysUI, openSans } from "../assets/theme";
import { StyledSignUpButton } from "../styled-components/StyledSignUpButton";
import FormControlCheckbox from "./FormControlCheckbox";
import { useCallback, memo } from "react";
import { useFormContext } from "../hooks/useFormContext";
import PasswordTextField from "./PasswordTextField";
import EmailTextField from "./EmailTextField";

function SignUpForm() {
  const { form, setForm } = useFormContext();

  const handleFormChange = useCallback((e) => {
      setForm((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    [setForm]
  );

  const handleCheck = useCallback(() => {
    setForm((prev) => ({
      ...prev, remember: !prev.remember
    }))
  },[setForm])

  return (
      <FormControl
        sx={{ width: "100%", marginTop: "30px", display: "grid", gap: "20px" }}
      >
        <EmailTextField onChange={handleFormChange} />
        <PasswordTextField onChange={handleFormChange} />
        <FormControlCheckbox onChange={handleCheck} isChecked={form.remember}/>
        <ThemeProvider theme={openSans}>
          <StyledSignUpButton variant="contained" disableElevation>
            Sign up
          </StyledSignUpButton>
        </ThemeProvider>
      </FormControl>
  );
}

export default memo(SignUpForm);
