import React, {useState} from 'react';
import ShareIcon from '../svgs/share-icon.svg';
import LinkIcon from '../svgs/link-icon.svg';
import styling from '../styles/stylesheet'

const GridCard = (props) => {

  return (
    <styling.GridCardStyle>
      <div>
        <styling.GridImg src={props.card.image} />
        <styling.StatusStyle>
          {props.card.status}
        </styling.StatusStyle>
      </div>

      <div>
        <styling.GridTitle>
          {props.card.title}
        </styling.GridTitle>

        <styling.GridDetail>
          <styling.GridReply>
            { props.card.replies >= 1 ? <div> <styling.StatusDot></styling.StatusDot>
              {props.card.replies === 1 ? `${props.card.replies} reply`
              : props.card.replies > 1 ? `${props.card.replies} replies` : null}
              </div>
              : null
            }
          </styling.GridReply>

          <styling.GridIcontainer>
            <styling.GridIcon><ShareIcon /></styling.GridIcon>
            <styling.GridIcon><LinkIcon /></styling.GridIcon>
          </styling.GridIcontainer>
        </styling.GridDetail>

        { props.card.status === 'ongoing' ?
        <styling.GridOngoing></styling.GridOngoing> 
        : props.card.status === 'ended' ? 
        <styling.GridEnded></styling.GridEnded> 
        : null
        }
      </div>
    </styling.GridCardStyle>
  )
}

export default GridCard;