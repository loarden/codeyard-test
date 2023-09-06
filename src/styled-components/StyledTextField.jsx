import { TextField, styled } from "@mui/material";
import { red } from "@mui/material/colors";

export const StyledTextField = styled(TextField)({
  width: '100%',
  '& label.Mui-focused': {
    color: '#4A90E2',
  },
  '& label.Mui-active': {
    fontSize: '12px'
  },
  '& label': {
    fontSize: '14px',
    color: '#757575'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#4A90E2',
  },
})



