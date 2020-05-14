import React from 'react';

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
    <tr>
      <td><img src={props.card.image} />
      <span className="card-name">{props.card.title}</span></td>
      <td>{props.card.replies > 1 ? `${props.card.replies} replies` : `${props.card.replies} reply`}</td>
      <td>{props.card.status}</td>
      <td>{date}</td>
    </tr>
  )
}

// Take into account border left ––– red = ended and green = ongoingg

export default ListCard;