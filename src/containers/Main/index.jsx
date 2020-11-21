import React, {memo, useCallback, useEffect, useState} from 'react'
import Api from '../../Request/api';
import { ContainerStyled } from './style';
import Board from './components/Board';
import Panel from './components/Panel';
import States from './components/States';


function Main() {

  const [ data, setdata ] = useState({});
  const [ country, setCountry ] = useState('world');
  const [ dataStates, setDataStates ] = useState({});
  //const [ state, setState ] = useState('');
  const [ showStates, setShowStates ] = useState(false);
  const updateAt = new Date().toLocaleString();
 
  

  const getCovidData = useCallback((country) => {
    
    Api.getCountry(country)
    .then(dataCountries => setdata(dataCountries));
  }, []);


  const handleChange = ({target}) => {
    const country = target.value;
    setCountry(country)
  }

  useEffect(() => {
      getCovidData(country)
      setShowStates(false);
  },[getCovidData, country]);

  
  useEffect(() => {
    const getCovidStates = async () => {
      const states = await Api.getStates();
      setDataStates(states)
    };
    getCovidStates();
  }, []);


  return (
    <ContainerStyled>
      <div className="mb-2">
      <Panel
        data={data}
        updateAt={updateAt}
        onChange={handleChange}
        country={country}
        getCovidData={getCovidData}
        showStates = {setShowStates}
      />
      </div>
      
      {!showStates ? <Board data={data}/> : 
      <States 
      dataStates={dataStates}
      showStates = {setShowStates}
      />}
    </ContainerStyled>
  )
}

export default memo(Main);