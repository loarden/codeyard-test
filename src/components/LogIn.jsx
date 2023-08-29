import { Button, Grid } from "@mui/material"
import { useFormContext } from "../hooks/useFormContext"
import axios from "axios"

function LogIn() {
  const {form} = useFormContext()

  const loginHandler = async () =>{
    const res = await axios({
      method: 'POST',
      url: 'https://us-central1-ria-server-b1103.cloudfunctions.net/authenticate',
      headers: 
      {
        'Content-Type': 'application/json'
      },
      data:
      {
        data:
        {
          email: form.email,
          password: form.password,
        }
      }
    })
    console.log(res.data.result)
}

  return (
    <Grid item sm={6} sx={{backgroundImage: 'url(https://santorinidave.com/wp-content/uploads/2022/06/budapest-best-places-four-seasons.jpeg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backdropFilter: 'blur(10px)', position: 'relative'}}>
      <Button onClick={loginHandler}>Log in</Button>
    </Grid>
  )
}

export default LogIn