import React from 'react';
import ListCard from './ListCard';

const ListView = (props) => {
  return (
    <table>
      <tr>
        <th>CARDS</th>
        <th>REPLIES</th>
        <th>STATUS</th>
        <th>DATE</th>
        <th>OPTION</th>
      </tr>
      {props.data.map((card, index) => (
        <ListCard card={card} key={index}/>
      ))}
    </table>
  )
}

export default ListView;