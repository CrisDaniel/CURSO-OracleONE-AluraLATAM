import { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

function FormSingUp(props){

    const {setValue} = props;

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [prom, setProm] = useState(true);
    const [nov, setNov] = useState(false);

    const [errors, setErrores] = useState({
        name: {
            error: false,
            message: "Deben ser almenos 3 caracteres",
        }
    });

    const validarNombre = (nombre) => {
        if(nombre.length >=3){
            return {name: {error: false, message: ""}}
        }else{
            return {name: {error: true, message: "Deben ser almenos 3 caracteres"}}
        }
    }

    return <form onSubmit={(evento) => {
                evento.preventDefault();
                setValue({name, lastName, email, prom, nov});
            }}>
        <TextField id="Nombres" label="Nombres" variant="outlined" fullWidth margin='normal' onChange={(evento) =>  setName(evento.target.value)} value={name}
            error={errors.name.error}
            helperText={errors.name.error ? errors.name.message : ""}
            onBlur={(e) => {
                setErrores(validarNombre(e.target.value))
            }}
        />
        <TextField id="Apellidos" label="Apellidos" variant="outlined" fullWidth margin='dense' onChange={(evento) =>  setLastName(evento.target.value)} value={lastName}/>
        <TextField id="Correo electronico" label="Correo electronico" variant="outlined" fullWidth margin='dense' onChange={(evento) =>  setEmail(evento.target.value)} value={email}/>
        <FormGroup>
            <FormControlLabel control={<Switch checked={prom}/>} label="Promociones" onChange={(evento) =>  setProm(evento.target.checked)}/>
            <FormControlLabel control={<Switch checked={nov}/>} label="Novedades" onChange={(evento) =>  setNov(evento.target.checked)}/>
        </FormGroup>

        <Button variant="contained" endIcon={<SendIcon/>} type='submit'>Registrarse</Button>
    </form>
}

export default FormSingUp;