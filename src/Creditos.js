import { Container, Box, Grid, Link } from '@mui/material';
import instaicon from './assets/instagram.png'
import medium from './assets/medium.png'


function Creditos() {
    return(
        <footer>
        <Box
          px={{ xs: 3, sm: 5 }}
          py={{ xs: 5, sm: 5 }}
          bgcolor="info.main"
          color="white"
        >
          <Container maxWidth="lg">
          <Grid display="flex"  justifyContent="center" alignItems="center" xs={8}>
            <h4 className='credits'>
              Este projeto foi realizado pela área de Processamento de Linguagem Natural do Turing USP. <br/>
              Para detalhamento dos membros envolvidos entrem no artigo do Medium
            </h4>
            <a href="https://www.instagram.com/turing.usp">
            <img style={{width: "2vw"}} src={instaicon}/>
            </a>
            <a href="https://medium.com/turing-talks">
            <img style={{width: "2vw"}} src={medium}/>
            </a>
          </Grid>
          </Container>
          <Box textAlign="center">
            <h6 className='credits'>Turing USP &reg; {new Date().getFullYear()}</h6>
          </Box>
        </Box>
      </footer>
    );
}
export default Creditos;