import React from 'react';
import ShareIcon from '../svgs/share-icon.svg';
import LinkIcon from '../svgs/link-icon.svg';

const GridCard = (props) => {

  return (
    <div>
      <img src={props.card.image} />
      <span>
        {props.card.status}
        </span>
      {props.card.title}
      {props.card.replies === 1 ? `${props.card.replies} reply`
      : props.card.replies > 1 ? `${props.card.replies} replies` : null}
      <ShareIcon />
      <LinkIcon />
    </div>
  )
}

export default GridCard;