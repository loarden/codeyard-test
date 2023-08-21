import { Box, FormControl, TextField } from "@mui/material"

function SignUpForm() {
  return (
    <FormControl sx={{width: '100%', marginTop: '30px'}}>
      <TextField variant="standard" label='Email' />
      <TextField variant="standard" label='Password' />

    </FormControl>
  )
}

export default SignUpForm