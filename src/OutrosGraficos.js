import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function OutrosGraficos(){

    const graficos_info = [
        {nome: 'Média de menções por Tweet',
        descricao: 'Bolsonaro e Lula mencionam, em média, praticamente o mesmo número de perfis por tweet (cerca de 0.4). Eymael, com 4 menções a cada 5 tweets, lidera o ranking com larga vantagem para o segundo colocado. Vera Lúcia é quem menos menciona outros perfis em seu twitter (1 menção a cada 5 tweets).',
        path_html: 'outros_graficos/media_de_mencoes_por_tweet.html'},

        {nome: 'Média diária de menções por Tweet',
        descricao: 'É possível notar "picos" locais no período de eleições (últimos meses de 2014 e 2018). Do início de 2020 em diante houve um boom no número médio de menções por tweet, possivelmente como consequência da pandemia de covid-19, já que passou a ser ainda mais importante divulgar informações científicas e sociais, logo os políticos podem ter usado da opinião de terceiros para referendar suas medidas de combate à Covid-19.',
        path_html: 'outros_graficos/media_diaria_de_mencoes_por_tweet.html'},

        {nome: 'Média de menções nos tweets do Lula',
        descricao: "De meados de 2012 a meados de 2016, Lula só faz uso das menções durante as eleições de 2014. Há um pico de menções em julho de 2016, período das Olimpíadas. Também há um pico de menções no período das eleições de 2018. No período de pandemia o número de menções por tweet sofreu grande aumento. A partir de 2022, com o avanço da vacinação e a diminuição da gravidade da pandemia em termos de números de casos e mortes, houve também redução do número médio de menções",
        path_html: 'outros_graficos/lula_media_mensal_mencoes_tweet.html'},

        {nome: 'Média de menções nos tweets do Bolsonaro',
        descricao: 'De 2014 até 2019 a distribuição média de menções segue um perfil mais constante que o de Lula. Há um pico em agosto de 2014, no período da Copa do Mundo. No período de pandemia o número de menções por tweet sofreu grande aumento. A partir de 2022, com o avanço da vacinação e a diminuição da gravidade da pandemia em termos de números de casos e mortes, houve também redução do número médio de menções.',
        path_html: 'outros_graficos/media_mensal_mencoes_bolsonaro.html'},

        {nome: 'Média de likes por Tweet',
        descricao: 'Bolsonaro, Lula e Ciro são os únicos candidatos com média superior a 1000 likes por tweet. Bolsonaro tem cerca de 5x mais likes por tweet que Lula.',
        path_html: 'outros_graficos/media_de_likes_por_tweet.html'},

        {nome: 'Engajamento por mês de cada candidato',
        descricao: '',
        path_html: 'outros_graficos/engajamento_mes_candidato.html'},

        {nome: 'Efeitos das menções nos likes',
        descricao: 'Vemos que os tweets sem menções geram mais likes para Lula, Bolsonaro e Ciro.',
        path_html: 'outros_graficos/efeitos_das_mencoes_nos_likes.html'},

        {nome: 'Likes por mês dos candidatos',
        descricao: '',
        path_html: 'outros_graficos/likes_mes_candidato.html'},

        {nome: 'Efeitos dos emojis nos likes',
        descricao: 'Vemos que, para Lula e Bolsonaro, o uso de emojis aumentam o número de likes dos tweets (no caso de  Lula, mais que o dobro de likes).',
        path_html: 'outros_graficos/efeitos_dos_emojis_nos_likes.html'},

        {nome: 'Quantidade de emojis usados pelos candidatos',
        descricao: 'O candidato que mais usou emojis, em números absolutos, foi o Lula, com Vera em segundo, e Ciro em terceiro.',
        path_html: 'outros_graficos/quantidade_emojis_usados_pelos_candidatos.html'},

        {nome: 'Menções feitas por Lula a outros candidatos',
        descricao: '',
        path_html: 'outros_graficos/LulaOficial_mencoes.html'},

        {nome: 'Menções feitas por Bolsonaro a outros candidatos',
        descricao: '',
        path_html: 'jairbolsonaro_mencoes.html'},

        {nome: "Menções feitas por Felipe d'Ávila a outros candidatos",
        descricao: '',
        path_html: 'outros_graficos/fdavilaoficial_mencoes.html'},

        {nome: 'Menções feitas por Ciro Gomes a outros candidatos',
        descricao: '',
        path_html: 'outros_graficos/cirogomes_mencoes.html'},

        {nome: 'Menções feitas por Leo Pericles a outros candidatos',
        descricao: '',
        path_html: 'outros_graficos/LeoPericlesUP_mencoes.html'},

        {nome: 'Menções feitas por Sofia Manzano a outros candidatos',
        descricao: '',
        path_html: 'outros_graficos/SofiaManzanoPCB_mencoes.html'},

        {nome: 'Menções feitas por Vera a outros candidatos',
        descricao: '',
        path_html: 'outros_graficos/verapstu_mencoes.html'},

        {nome: 'Menções feitas por Soraya Thronicke a outros candidatos',
        descricao: 'A candidata que mais mencionou outros perfis, que não o próprio, foi Soraya Thronicke, mencionando Bolsonaro 87.39% do total de menções que ele recebeu de outros candidatos.',
        path_html: 'outros_graficos/SorayaThronicke_mencoes.html'},

        {nome: 'Contagem de tweets: Bolsonaro',
        descricao: '',
        path_html: 'outros_graficos/contagem_tweets_bolsonaro.html'},

        {nome: 'Contagem de tweets: Lula',
        descricao: '',
        path_html: 'outros_graficos/contagem_tweets_lula.html'},

        {nome: 'Likes recebidos em tweets: Bolsonaro',
        descricao: '',
        path_html: 'outros_graficos/likes_recebidos_bolsonaro.html'},

        {nome: 'Likes recebidos em tweets: Lula',
        descricao: '',
        path_html: 'outros_graficos/likes recebidos_lula.html'},

        {nome: 'Likes recebidos em tweets: todos os presidenciáveis',
        descricao: '',
        path_html: 'outros_graficos/likes_todos.html'},

        {nome: 'Retweets: Bolsonaro',
        descricao: '',
        path_html: 'outros_graficos/rts_bolsonaro.html'},

        {nome: 'Retweets: Lula',
        descricao: '',
        path_html: 'outros_graficos/rts_lula.html'},

        {nome: 'Retweets: todos os presidenciáveis',
        descricao: '',
        path_html: 'outros_graficos/rts_todos.html'},

        {nome: 'Respostas recebidas em tweets: Bolsonaro',
        descricao: '',
        path_html: 'outros_graficos/respostas_bolsonaro.html'},

        {nome: 'Respostas recebidas em tweets: Lula',
        descricao: '',
        path_html: 'outros_graficos/respostas_lula.html'},

        {nome: 'Respostas recebidas em tweets: todos os presidenciáveis',
        descricao: '',
        path_html: 'outros_graficos/respostas_todos.html'},

        {nome: 'Quotes: Bolsonaro',
        descricao: '',
        path_html: 'outros_graficos/quotes_bolsonaro.html'},

        {nome: 'Quotes: Lula',
        descricao: '',
        path_html: 'outros_graficos/quotes_lula.html'},

        {nome: 'Quotes: todos os presidenciáveis',
        descricao: '',
        path_html: 'outros_graficos/quotes_todos.html'},

        {nome: 'Likes x RTs: Bolsonaro',
        descricao: '',
        path_html: 'outros_graficos/lxrt_bolsonaro.html'},

        {nome: 'Likes x RTs: Lula',
        descricao: '',
        path_html: 'outros_graficos/lxrt_lula.html'},

        {nome: 'Likes x RTs: todos os presidenciáveis',
        descricao: '',
        path_html: 'outros_graficos/lxrt_todos.html'},

        {nome: 'Tweets por horário do dia: Bolsonaro',
        descricao: '',
        path_html: 'outros_graficos/horario_bolsonaro.html'},

        {nome: 'Tweets por horário do dia: Lula',
        descricao: '',
        path_html: 'outros_graficos/horario_lula.html'},

        {nome: 'Tweets por horário do dia: todos os presidenciáveis',
        descricao: '',
        path_html: 'outros_graficos/horario_todos.html'}
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