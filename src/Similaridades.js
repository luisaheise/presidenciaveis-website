import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useWindowSize from "./hooks/useWindowSize";

function Similaridades() {
    const size = useWindowSize();
    const [selectedGraficoSimilaridade, setSelectedGraficoSimilaridade] = useState(0);
    const [graficosSimilaridadeInfo, setGraficosSimilaridadeInfo] = useState(
        [
            ["Aposentadoria", "Aposentadoria.html"],
            //["Auxílio Brasil", "Auxílio Brasil.html"],
            ["Questões Trabalhistas", "Trabalho.html"],
            ["Covid-19", "Covid.html"],
            //["Dólar", "Dólar.html"],
            ["Educação", "Educação.html"],
            ["Fome", "Fome.html"],
            ["Gasolina", "Gasolina.html"],
            //["Inflação", "Inflação.html"],
            ["LGBT", "LGBT.html"],
            //["PEC Kamikaze", "PEC Kamikaze.html"],
            //["Religião", "Religião.html"],
            ["Vacina", "Vacina.html"]
        ]
    );

    const handleThemeChange = (event) => {
        console.log(size)
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
                src= {size[0]<800?'graficos_similaridade/sem_barra/'+graficosSimilaridadeInfo[selectedGraficoSimilaridade][1]:'graficos_similaridade/'+graficosSimilaridadeInfo[selectedGraficoSimilaridade][1]}
                frameborder="0"/>   
      </>
      
    );
  }

export default Similaridades;
