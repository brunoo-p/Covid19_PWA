import React, { memo } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Card from './Card';
import { Grid, Skeleton} from '../../../components';
import {DivStyle, CardStyle, Exit} from './style'

function States({ dataStates, showStates }) {
  const arrayState = dataStates.data.map(
    ({ uid, uf, state, cases, deaths, refuses, suspects }) => {
      return {
        uid,
        uf,
        state,
        cases,
        deaths,
        refuses,
        suspects,
      };
    }
  );
  const getValue = (value) =>
    value ? value : <Skeleton variant="text" width={182} height={60} />;


  const handleBack = () =>{
    showStates(false);
  }

  console.log(arrayState);
  return (
    <DivStyle>
      <Exit><ArrowBackIcon  style={{fontSize: 34}}onClick={handleBack}/></Exit>
      {dataStates.data.map(
        ({ uid, state, cases, deaths, refuses, suspects }) => (
          <div key={uid} >
            <CardStyle>
              
          <h1 style={{color: 'white'}}>{state}</h1>
            <Grid container spacing={1}>
              <Grid item xs={12} md={4}>
                <Card
                  value={getValue(cases)}
                  label="Total Cases"
                  color="#e61919"
                />
              </Grid>
              {/* <Grid item xs={12} md={3}> */}
                <Card
                  value={getValue(suspects)}
                  label="Suspects"
                  color="#F95819"
                />
                <br/>
                <Card
                  value={getValue(deaths)}
                  label="Total Deaths"
                  color="#000"
                />
                <Card
                  value={getValue(refuses)}
                  label="Refuses"
                  color="#5a7"
                />
                {/* </Grid> */}
            </Grid>
            </CardStyle>
          </div>
        )
      )}
    </DivStyle>
  );
}
export default memo(States);
