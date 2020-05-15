import React from 'react';
import ShareIcon from '../svgs/share-icon.svg';
import LinkIcon from '../svgs/link-icon.svg';
import styling from '../styles/stylesheet'

const GridCard = (props) => {
  return (
    <styling.GridCardStyle>
      <div>
        {/* Image */}
        <styling.GridImg src={props.card.image} />
        {/* Status */}
        <styling.StatusStyle>
          {props.card.status}
        </styling.StatusStyle>
      </div>
      <div>
        {/* Title */}
        <styling.GridTitle>
          {props.card.title}
        </styling.GridTitle>
        <styling.GridDetail>
          {/* Replies */}
          <styling.GridReply>
            {/* Creating a dot whether there are replies, and whether to use singlar or plural for 'reply' */}
            { props.card.replies >= 1 ? <div> <styling.StatusDot></styling.StatusDot>
              {props.card.replies === 1 ? `${props.card.replies} reply`
              : props.card.replies > 1 ? `${props.card.replies} replies` : null}
              </div>
              : null
            }
          </styling.GridReply>
          <styling.GridIcontainer>
            {/* Share and Link icons */}
            <styling.GridIcon><ShareIcon /></styling.GridIcon>
            <styling.GridIcon><LinkIcon /></styling.GridIcon>
          </styling.GridIcontainer>
        </styling.GridDetail>
        {/* Checking the status for the color of the bar below the cards */}
        { props.card.status === 'ongoing' ?
        <styling.GridOngoing></styling.GridOngoing> 
        : props.card.status === 'ended' ? 
        <styling.GridEnded></styling.GridEnded> 
        : <styling.GridScheduled></styling.GridScheduled>
        }
      </div>
    </styling.GridCardStyle>
  )
}

export default GridCard;