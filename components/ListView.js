import React from 'react';
import ListCard from './ListCard';
import styling from '../styles/stylesheet';

const ListView = (props) => {

  return (
    <styling.ListViewStyle>
      <tbody>
      <styling.ListHeaderRow>
        {/* Headers */}
        <styling.ListEmptyHeader></styling.ListEmptyHeader>
        <styling.ListHeader>Cards</styling.ListHeader>
        <styling.ListHeader>Replies</styling.ListHeader>
        <styling.ListHeader>Status</styling.ListHeader>
        <styling.ListHeader>Date Created</styling.ListHeader>
        <styling.ListHeader>Options</styling.ListHeader>
      </styling.ListHeaderRow>
      
      {props.data.map((card, index) => (
        <ListCard card={card} key={index}/>
      ))}
      </tbody>
    </styling.ListViewStyle>
  )
}

export default ListView;