import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function OutrosGraficos(){

    const graficos_info = [
        {nome: 'Média de menções nos tweets do Lula',
        descricao: '',
        path_html: 'outros_graficos/lula_media_mensal_mencoes_tweet.html'},

        {nome: 'Média de likes por Tweet',
        descricao: '',
        path_html: 'outros_graficos/media_de_likes_por_tweet.html'},

        {nome: 'WordClouds',
        descricao: '',
        path_html: 'outros_graficos/wordclouds.html'},

        {nome: 'Efeitos das menções nos likes',
        descricao: '',
        path_html: 'outros_graficos/efeitos_das_mencoes_nos_likes.html'},

        {nome: 'Likes por mês dos candidatos',
        descricao: '',
        path_html: 'outros_graficos/likes_mes_candidato.html'},
    ]

    const [indexGraph, setIndexGraph] = useState(0);

    const handleThemeChange = (event) => {
        setIndexGraph(event.target.value);
      };
    
      return (
        <>
            <Box style={{width: "95%", margin: "auto"}}>
            <FormControl fullWidth>
            <InputLabel id="input-label-select-sim-graph">Tema</InputLabel>
            <Select
                labelId="select-label-select-sim-graph"
                id="sim-graph-select"
                value={indexGraph}
                label="Tema"
                onChange={handleThemeChange}
            >
                {
                    graficos_info.map(function(graphInfo, index){
                        return <MenuItem value={ index }>{graphInfo.nome}</MenuItem>;
                        }
                    )
                }
            </Select>
            </FormControl>
            <h4 className='general-text'>
              {graficos_info[indexGraph].descricao}
            </h4>
            <iframe title ={graficos_info[indexGraph].nome}
                id="graficoSimID"
                src= {graficos_info[indexGraph].path_html}
                frameborder="0"/> 
        </Box>
      </>
      
    );

}