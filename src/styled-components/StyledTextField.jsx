import { TextField, styled } from "@mui/material";

export const StyledTextField = styled(TextField)({
  width: '100%',
  '& label.Mui-focused': {
    color: '#4A90E2',
  },
  '& label.Mui-active': {
    fontSize: '12px'
  },
  '& label': {
    fontSize: '14px'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#4A90E2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'yellow',
    },
  },
})



