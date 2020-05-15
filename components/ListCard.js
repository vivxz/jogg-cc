import React from 'react';
import styling from '../styles/stylesheet'

const ListCard = (props) => {

  var month =
    { 'Jan':'January', 
    'Feb':'Febuary', 
    'Mar':'March', 
    'Apr':'April', 
    'May':'May', 
    'Jun':'June', 
    'Jul':'July', 
    'Aug':'August', 
    'Sep':'September', 
    'Oct':'October', 
    'Nov':'November', 
    'Dec':'December'}
  
  var dates = props.card.date.split(' ');
  var date = `${month[dates[1]]} ${dates[2]}, ${dates[3]}`;

  return (
    <styling.ListRow>
      {/* <td> */}

      {/* Checking the status for the color of the bar on the left side of the cards */}
      { props.card.status === 'ongoing' ?
        <styling.ListOngoing></styling.ListOngoing> 
        : props.card.status === 'ended' ? 
        <styling.ListEnded></styling.ListEnded> 
        : <span></span>
      }
      {/* </td> */}
      <td>
        {/* Image */}
        <styling.ListImg src={props.card.image} />
        {/* Title */}
        <styling.ListTitle>{props.card.title}</styling.ListTitle>
      </td>
      <styling.ListDetail>
        {/* Creating a dot whether there are replies, and whether to use singlar or plural for 'reply' */}
        { props.card.replies >= 1 ? <div> <styling.StatusDot></styling.StatusDot>
          {props.card.replies > 1 ? `${props.card.replies} replies` : `${props.card.replies} reply`}
        </div>: <div>{`${props.card.replies} reply`}</div> }
      </styling.ListDetail>
      {/* Status */}
      <styling.ListStatus>{props.card.status}</styling.ListStatus>
      {/* Date Created */}
      <styling.ListDetail>{date}</styling.ListDetail>
      <styling.ListDetail>
          {/* Creating 3 dots */}
        <styling.OptionDot></styling.OptionDot> 
        <styling.OptionDot></styling.OptionDot>
        <styling.OptionDot></styling.OptionDot>        
      </styling.ListDetail>
    </styling.ListRow>
  )
}

export default ListCard;