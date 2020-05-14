import React from 'react';
import GridCard from './GridCard';

const GridView = (props) => {
  return (
    <div>
      {props.data.map((card, index) => (
        <GridCard card={card} key={index}/>
      ))}
    </div>
  )
}

export default GridView;