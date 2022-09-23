import './App.css';
import logo from './assets/logo_turing.png'
import Similaridades from './Similaridades.js'

import OutrosGraficos from './OutrosGraficos.js'
import { Typography, Paper, Grid, Divider, Link } from '@mui/material';




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
              Bem-vind@ ao site do Presidenciáveis - Turing USP! Nós somos um grupo de Inteligência Artificial da Universidade de São Paulo, formado por estudantes de vários cursos da faculdade. Buscamos estudar, disseminar e aplicar a Inteligência Artificial. Caso queira saber mais sobre nós, acesse <Link href='https://linktr.ee/turing.usp'>este link</Link>.
            </h4>
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center" xs={8}>
            <h4 className='general-text'>
              Nesse projeto, coletamos tweets de candidatos a Presidência da República nas eleições de 2022. Os tweets vão do início de 2012 até 2022. Com estes dados, calculamos a similaridade entre os discursos dos candidatos sobre determinados temas. Para realizar esta tarefa, utilizaos técnicas do Estado da Arte de Processamento de Linguagem Natural. Você pode encontrar mais detalhes da execução do projeto em <Link href='https://linktr.ee/turing.usp'>nosso artigo no medium.</Link>
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
