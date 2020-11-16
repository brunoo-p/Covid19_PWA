import React, {memo} from 'react'
import {formatNumber} from '../../../common/utils/formatNumber'
import { Card as CardUI } from '../../../components';
import { 
  LabelStyled,
  ValueStyled,
  CardContentStyled
} from './style'

function Card( {value, label, color }) {
  return (
    <CardUI style={{borderRadius: '15px'}}>
      <CardContentStyled color={color}>
        <ValueStyled>{formatNumber(value)}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
      </CardContentStyled>
    </CardUI>
  )
}

export default memo(Card);