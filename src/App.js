import './App.css';
import logo from './assets/logo_turing.png'
import Similaridades from './Similaridades.js'
import OutrosGraficos from './OutrosGraficos.js'
import { Typography, Paper, Grid, Divider } from '@mui/material';



function App() {
  return (
      <div className='main-container'>
        <Paper style={{width: "90%", alignSelf: "center"}} elevation={0} variant="outlined">
        <Grid>
        <Grid display="flex" justifyContent="center" alignItems="center" xs={8}>
            <img src={logo} style={{width: "20%"}}></img>
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center" xs={8}>
            <h1 className='main-title'> Presidenciáveis </h1>
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center" xs={8}>
            <h2 className='subtitle' > Por Turing USP </h2>
            <Divider light />
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center" xs={8}>
            <h4 className='general-text'>
              Bem-vindos ao site do projeto de Presidenciáveis do Turing USP. Nesse projeto, nós coletamos tweets desde 2012 dos candidatos a 
              presidência da república em 2022 e utilizando técnicas de estado da arte em processamento de linguagem natural, calculamos a similaridade 
              dos discursos por tema dos candidatos. Caso tenha curiosidade de como isso foi feito, leia nosso artigo no medium sobre o assunto.
            </h4>
          </Grid>
          <Grid xs={8}>
            <Divider light></Divider>
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center" xs={8}>
            <h4 className='general-text'>
              Abaixo, escolha um assunto da sua preferência e observe as similaridades dos tweets dos candidatos!
            </h4>
          </Grid>
          <Grid justifyContent="center" alignItems="center" xs={8}>
            <Similaridades/>
          </Grid>
          <Grid justifyContent="center" alignItems="center" xs={8}>
            <OutrosGraficos/>
          </Grid>
        </Grid>  
        </Paper>
      </div>
      
  );
}

export default App;
