import { createContext, useState } from "react";

export const FormContext = createContext(null)

export default function FormContextProvider({ children }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: false
  })

  return (
    <FormContext.Provider
      value={{
        form,
        setForm
      }}
    >
      {children}
    </FormContext.Provider> 
  )
}