import { Container, Box, Grid, Link } from '@mui/material';


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
          <Grid display="flex" justifyContent="center" alignItems="center" xs={8}>
            <h4 className='credits'>
              Este projeto foi realizado pela área de Processamento de Linguagem Natural do Turing USP, cujos membros são: (inserir nomes aqui). 
            </h4>
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