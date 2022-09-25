import './App.css';
import logo from './assets/logo_turing.png'
import Similaridades from './Similaridades.js'

import OutrosGraficos from './OutrosGraficos.js'
import { Typography, Paper, Grid, Divider, Link } from '@mui/material';
import wordcloudSVG from './assets/wordcloud.svg'



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
            Bem-vinde ao site do Presidenciáveis - Turing USP! Somos um grupo de Inteligência Artificial da Universidade de São Paulo, formado por estudantes de vários cursos da faculdade. Buscamos estudar, disseminar e aplicar a Inteligência Artificial. Caso queira saber mais sobre nós, acesse <Link href='https://linktr.ee/turing.usp'>este link</Link>.
            Nesse projeto, coletamos tweets de candidatos à Presidência da República nas eleições de 2022 (com exceção do candidato Padre Kelmon, do PTB, do qual não encontramos uma conta na plataforma cujos tweets apresentam cunho político). Os tweets vão do início de 2012 até 2022. 
          </h4>
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center" xs={8}>
            <h4 className="general-text">
            Com estes dados, calculamos a similaridade entre os discursos dos candidatos sobre determinados temas. Para realizar esta tarefa, utilizamos técnicas do Estado da Arte de Processamento de Linguagem Natural. Você pode encontrar mais detalhes da execução do projeto em nosso artigo no <Link href='https://linktr.ee/turing.usp'>Medium.</Link>, para, por exemplo, entender o que realmente significam estas similaridades. Além disso, também realizamos algumas análises sobre os tweets utilizando técnicas de Ciência de Dados, o que foi feito pela <strong>área de Data Science do Turing USP</strong>.
            </h4>
          </Grid>
          <Grid xs={8}>
            <Divider light></Divider>
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center" xs={8}>
            <h4 className='general-text'>
            Na seção a seguir, selecione um tema para expandir um gráfico apresentando uma matriz de similaridades entre os candidatos à presidência, de acordo com seus tweets, a respeito deste tema. Para a construção dos gráficos, foram considerados para os cálculos apenas os candidatos que apresentaram mais de 10 tweets sobre o assunto. 
            Selecione um tema:
            </h4>
          </Grid>
          <Grid justifyContent="center" alignItems="center" xs={8}>
            <Similaridades/>
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center" xs={8}>
            <img src={wordcloudSVG} style={{width: "100%"}}/>
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center" xs={8}>
            <h4 className='general-text'>
            Na seção a seguir, apresentamos gráficos que retratam a configuração dos tweets dos candidatos no que diz respeito a assuntos como número de links, menções, emojis e likes.
            Selecione o assunto:
            </h4>
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
