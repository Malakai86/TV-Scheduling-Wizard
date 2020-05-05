import React from 'react';
import Show from './Show';

const ShowList = ({ shows, onShowAdded, filteredShows }) => {
  if (filteredShows.length) {
    shows = filteredShows
  }
  const showNodes = shows.map(show => (
    <Show
    key={show._id}
    show={show}
    onShowAdded={onShowAdded}></Show>
  ));

  return (
    <div id="showList">
    {showNodes}
    </div>
  )
}

export default ShowList;
