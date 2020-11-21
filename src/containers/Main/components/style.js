import styled from 'styled-components';
import {Typography, CardContent} from '../../../components';

export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-size: 1.5rem;
`

export const ValueStyled = styled(Typography)`
  font-weight: 400;
  font-size: 2.5rem;
`

export const CardContentStyled = styled(CardContent)`
  border-left: 8px solid ${({ color }) => color || '#5d78ff'};
  
`

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  `

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 150px;
`
export const DivStyle = styled.div`
  width: 100%;
  padding: 20px;
  heigth: 100vh;
  background-color: rgba(0,0,0,0.7);
  color: white;
  box-shadow: 5px 5px rgba(5,200,100,0.5), 8px 5px 8px 10px rgba(145,145,145,0.6);
  border: 1px solid silver;
  border-radius: 20px;
`

export const CardStyle = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 2px solid rgba(0,143,143,0.4);
  margin-left: 8%;
  margin-top: 10px;
`
export const Exit = styled.span`
  color: red;
  padding: 10px;
  position: absolute;
  :hover{
    cursor: pointer;
    background-color: rgba(143,143,140,0.2)
  }
`