import { FormControl, ThemeProvider } from "@mui/material";
import { appleSysUI } from "../assets/theme";
import { StyledSignUpButton } from "../styled-components/StyledSignUpButton";
import FormControlCheckbox from "./FormControlCheckbox";
import { useCallback } from "react";
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
    }, [setForm]);

  const handleCheck = useCallback(() => {
    setForm((prev) => ({
      ...prev,
      remember: !prev.remember,
    }));
  }, [setForm]);

  return (
    <FormControl
      sx={{ width: "100%", marginTop: "30px", display: "grid", gap: "20px" }}
    >
      <ThemeProvider theme={appleSysUI}>
        <EmailTextField onChange={handleFormChange} />
        <PasswordTextField onChange={handleFormChange} />
        <FormControlCheckbox onChange={handleCheck} isChecked={form.remember} />
      </ThemeProvider>
      <StyledSignUpButton variant="contained" disableElevation>
        Sign up
      </StyledSignUpButton>
    </FormControl>
  );
}

export default SignUpForm;
