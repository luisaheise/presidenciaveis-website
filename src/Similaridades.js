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
            ["Aposentadoria", "graficos_similaridade/Aposentadoria.html"],
            //["Auxílio Brasil", "graficos_similaridade/Auxílio Brasil.html"],
            ["Questões Trabalhistas", "graficos_similaridade/Trabalho.html"],
            ["Covid-19", "graficos_similaridade/Covid.html"],
            //["Dólar", "graficos_similaridade/Dólar.html"],
            ["Educação", "graficos_similaridade/Educação.html"],
            ["Fome", "graficos_similaridade/Fome.html"],
            ["Gasolina", "graficos_similaridade/Gasolina.html"],
            //["Inflação", "graficos_similaridade/Inflação.html"],
            ["LGBT", "graficos_similaridade/LGBT.html"],
            //["PEC Kamikaze", "graficos_similaridade/PEC Kamikaze.html"],
            //["Religião", "graficos_similaridade/Religião.html"],
            ["Vacina", "graficos_similaridade/Vacina.html"]
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
