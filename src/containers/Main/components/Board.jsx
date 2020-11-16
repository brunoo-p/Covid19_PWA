import React from 'react';
import {Grid, Skeleton} from '../../../components'
import Card from './Card'


function Board({data}){
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  return(
    <Grid  container spacing={4}>
    <Grid item xs={12} md={4}>
      <Card value={getValue(cases)} label='Total de casos' color='#e61919'/>
    </Grid>
    <Grid item xs={12} md={4}>
      <Card value={getValue(todayCases)} label='Novos Casos' color='#F95819'/>
    </Grid>
    <Grid item xs={12} md={4}>
      <Card value={getValue(todayDeaths)} label='Óbitos hoje' color='#3336'/>
    </Grid>
    <Grid item xs={12} md={4}>
      <Card value={getValue(recovered)} label='Total de recuperados' color='#5a7'/>
    </Grid>
    <Grid item xs={12} md={4}>
      <Card value={getValue(deaths)} label='Total de mortos' color='#000'/>
    </Grid>
    </Grid>
  )
}

export default Board;