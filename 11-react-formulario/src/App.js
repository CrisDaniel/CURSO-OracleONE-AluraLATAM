import './App.css';
import Container from '@mui/material/Container';
import FormSingUp from './components/FormSingUp';
import Typography from '@mui/material/Typography';

function App() {

  const setValue = (values) => {
    console.log('Valores: ', values);
  };

  return (
    <Container component="section" maxWidth="sm">
      <Typography variant='h3' align='center' component="section">Formulario Registro</Typography>
      <hr/>
      <FormSingUp setValue={setValue}/>
    </Container>
  );
}

export default App;
