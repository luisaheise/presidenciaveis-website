import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
//import PlotlyGraph from './components/PlotlyGraph.js'
//import bolsonaro_media_mensal_mencoes_tweet from './assets/outros_graficos/bolsonaro_media_mensal_mencoes_tweet.json'
//<PlotlyGraph
//data = {graficos_info[indexGraph].dado_json['data']}
//layout = {graficos_info[indexGraph].dado_json['layout']}
///>
export default function OutrosGraficos(){
    const graficos_info = [
        {nome: 'Contagem de Links',
        descricao: 'Contagem de Links por candidato',
        path_html: 'outros_graficos/contagem_links.html'},
        {nome: 'Dispersão de Links',
        descricao: 'Dispersão de Links por candidato',
        path_html: 'outros_graficos/dispersao_links_tweets.html'},
        {nome: 'Menções nos likes',
        descricao: 'Contagem de Links por candidato',
        path_html: 'outros_graficos/efeito_das_mencoes_nos_likes.html'},
        {nome: 'WordClouds',
        descricao: 'Contagem de Links por candidato',
        path_html: 'outros_graficos/wordclouds.html'}
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