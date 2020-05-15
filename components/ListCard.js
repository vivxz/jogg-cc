import React from 'react';
import styling from '../styles/stylesheet'

const ListCard = (props) => {

  // Created an array of the months full name
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var dates = new Date (props.card.date);
  var MM = dates.getMonth(); // returns a number from 0 to 11 ; will be used as an index
  var DD = dates.getDate(); // returns the date
  var YYYY = dates.getFullYear(); // returns the year
  var date = `${months[MM]} ${DD}, ${YYYY}`; // Formatted date to MM DD, YYYY
  
  return (
    <styling.ListRow>
      {/* Checking the status for the color of the bar on the left side of the cards */}
      { props.card.status === 'ongoing' ?
        <styling.ListOngoing></styling.ListOngoing> 
        : props.card.status === 'ended' ? 
        <styling.ListEnded></styling.ListEnded> 
        : <styling.ListScheduled></styling.ListScheduled>
      }
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