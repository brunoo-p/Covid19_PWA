import React, {memo, useCallback, useEffect, useState} from 'react'
import Api from '../../api';
import { ContainerStyled } from './style';
import Board from './components/Board';
import Panel from './components/Panel';


function Main() {

  const [ data, setData ] = useState({});
  const [ country, setCountry ] = useState('world');
  const updateAt = new Date().toLocaleString();

  const getCovidData = useCallback((country) => {
    
    Api.getCountry(country)
    .then(dataCountry => setData(dataCountry))
  }, []);

  const handleChange = ({target}) => {
    const country = target.value;
    setCountry(country)
  }

  useEffect(() => {
    
    getCovidData(country)
  },[getCovidData, country])

  return (
    <ContainerStyled>
      <div className="mb-2">
      <Panel
      data={data}
      updateAt={updateAt}
      onChange={handleChange}
      country={country}
      getCovidData={getCovidData}
      />
      </div>
      <Board data={data}/>
    </ContainerStyled>
  )
}

export default memo(Main);