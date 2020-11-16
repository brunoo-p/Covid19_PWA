import { createGlobalStyle } from 'styled-components';
import CovidImg from '../../assets/imagens/covid.jpeg';

const globalStyle = createGlobalStyle`
  *{
    outline: none;
    box-sizing: border-box;
  }

  body{
    line-height: normal;
    box-sizing: border-box;
  }

  html, body{
    display: flex;
    width: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0; 
  }

  #root{
    background: url(${CovidImg});
    opacity: 0.6
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }

  .mb-2{
    margin-bottom: 16px;  
  }
  .pt-2{
    padding-top: 16px;
  }
  .cursor{
    cursor: pointer;
  }
`

export default globalStyle;