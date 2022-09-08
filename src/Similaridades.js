import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function Similaridades() {
    const [selectedGraficoSimilaridade, setSelectedGraficoSimilaridade] = useState(0);
    const [graficosSimilaridadeInfo, setGraficosSimilaridadeInfo] = useState(
        [
            ["Aposentadoria", "graficos_similaridade/aposentadoria.html"],
            ["Auxílio Brasil", "graficos_similaridade/auxilio_brasil.html"],
            ["CLT", "graficos_similaridade/clt.html"],
            ["Covid-19", "graficos_similaridade/covid.html"],
            ["Dólar", "graficos_similaridade/dolar.html"],
            ["Educação", "graficos_similaridade/educacao.html"],
            ["Fome", "graficos_similaridade/fome.html"],
            ["Gasolina", "graficos_similaridade/gasolina.html"],
            ["Inflação", "graficos_similaridade/inflacao.html"],
            ["LGBT", "graficos_similaridade/lgbt.html"],
            ["PEC Kamikaze", "graficos_similaridade/pec_kamikaze.html"],
            ["Religião", "graficos_similaridade/religiao.html"],
            ["Vacina", "graficos_similaridade/vacina.html"]
        ]
    );

    const handleThemeChange = (event) => {
        setSelectedGraficoSimilaridade(event.target.value);
      };
  
    return (
        <>
            <Box style={{width: "95%", margin: "auto"}}>
            <FormControl fullWidth>
            <InputLabel id="input-label-select-sim-graph">Tema</InputLabel>
            <Select
                labelId="select-label-select-sim-graph"
                id="sim-graph-select"
                value={selectedGraficoSimilaridade}
                label="Tema"
                onChange={handleThemeChange}
            >
                {
                    graficosSimilaridadeInfo.map(function(graphInfo, index){
                        return <MenuItem value={ index }>{graphInfo[0]}</MenuItem>;
                        }
                    )
                }
            </Select>
            </FormControl>
        </Box>
        <iframe title ={graficosSimilaridadeInfo[selectedGraficoSimilaridade][0]}
                id="graficoSimID"
                src= {graficosSimilaridadeInfo[selectedGraficoSimilaridade][1]}
                frameborder="0"/>   
      </>
      
    );
  }

export default Similaridades;
