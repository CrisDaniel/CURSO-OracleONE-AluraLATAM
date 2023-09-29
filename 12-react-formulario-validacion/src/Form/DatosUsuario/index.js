import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarEmail, validarPassword } from "./validaciones";

const DatosUsuario = ({updateStep}) => {

  const [email, setEmail] = useState({value: "", valid: null});
  const [password, setPassword] = useState({value: "", valid: null});

    return (
      <Box
        component="form"
        autocomplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        onSubmit={(evento) => {
          evento.preventDefault();
          if(email.valid && password.valid){
            console.log("Siguiente form");
            console.log(email, password);
            updateStep(1)
          }else{
            console.log("Error de form")
          }
        }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={email.valid === false}
          helperText={email.valid === false && "Ingresa un correo electrónico válido"}
          value={email.value}
          onChange={(evento) => {
            const email =evento.target.value;
            const valido = validarEmail(email);
            setEmail({value: email, valid: valido});
          }}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
          error={password.valid === false}
          helperText={password.valid === false && "Ingresa una contraseña de almenos 8 caracteres y maximo 20"}
          value={password.value}
          onChange={(evento) => {
            const pass =evento.target.value;
            setPassword({value: pass, valid: validarPassword(pass)})
          }}
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>
    );
}

export default DatosUsuario;
