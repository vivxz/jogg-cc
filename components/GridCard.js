import React from 'react';

const GridCard = (props) => {

  return (
    <div>
      <img src={props.card.image} />
      {props.card.status}
      {props.card.title}
      {props.card.replies === 1 ? `${props.card.replies} reply`
      : props.card.replies > 1 ? `${props.card.replies} replies` : null}
      SHARE IMAGE
      LINK IMAGE
    </div>
  )
}

export default GridCard;