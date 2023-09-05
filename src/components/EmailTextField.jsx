import { StyledTextField } from "../styled-components/StyledTextField"
import { memo } from "react"

function EmailTextField ({ onChange }) {

  const handleOnChange = (e) => {
    onChange(e)
  }

  return (
    <StyledTextField
    onChange={handleOnChange}
    name="email"
    variant="standard"
    label="Email"
    type="email"
    InputProps={{
      style: {
        color: "#757575",
        fontSize: "14px",
      },
    }}
  />
  )
}

export default memo(EmailTextField)