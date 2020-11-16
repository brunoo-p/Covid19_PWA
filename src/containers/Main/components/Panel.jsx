import React, { memo } from 'react'
import { Card, Typography, Button, Select, MenuItem } from '../../../components';
import COUNTRIES from '../../../common/constants/countries';
import { CardPanelContentStyled, ItemStyled } from './style'
import RefreshIcon from '../../../assets/imagens/refresh.svg'

const navigatorHasShare = navigator.share;

function Panel( {updateAt, onChange, data, country, getCovidData} ) {
  const { cases, recovered, todayDeaths, deaths, todayCases } = data

  const renderCountries = (country, index) => (
   
   <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt= {country}/>
      </ItemStyled>
    </MenuItem>
  )
    const textCovid19 = `País: ${country}  Casos Hoje: ${todayCases} | Óbitos Hoje: ${todayDeaths} | Total Casos: ${cases} | Total Recuperados: ${recovered} | Total Mortes: ${deaths}`
    const shareInfo = () => {
      navigator.share({
        tittle: `Dados do Covid19 - ${country}`,
        text: textCovid19,
        url: 'http://localhost:3000'
      })
    }

    const copyInfo = () => {
      navigator.clipboard.writeText(textCovid19) 
    }


  const renderShareButton = ( 
    <div>
    <Button variant='contained' color='primary' style={{backgroundColor: '#99fa'}} onClick={shareInfo}> Compartilhar </Button>
    </div>
  )
  const renderCopyButton = (
    <div>
      <Button variant='contained' color='secondary'  style={{backgroundColor: '#2aa3aBBa'}} onClick={copyInfo}> Copiar </Button>
    </div>
  )

  return(
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant='h4' component='span' color='initial'>  Painel Coronavírus </Typography>
          <Typography variant='body2' component='span' color='primary'>  Atualizado em: {updateAt} </Typography>
          <img src={RefreshIcon} alt="Atualizar" onClick={() => getCovidData(country)} className="cursor" />
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        <>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
        </>
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel);