import React from 'react';
import GridCard from './GridCard';
import styling from '../styles/stylesheet'

const GridView = (props) => {
  return (
    <styling.GridViewStyle>
      {props.data.map((card, index) => (
        <GridCard card={card} key={index}/>
      ))}
    </styling.GridViewStyle>
  )
}

export default GridView;