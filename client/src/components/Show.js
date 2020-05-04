import React from 'react';

const Show = ({show, onShowDelete,}) => {
  return(
    <div className="Show">
    <h3>{show.name}</h3>
    <h3>{show.schedule.days.map((day) => {return `${day} `})}</h3>
    <p>{show.schedule.time}</p>
    <button onClick={() => onShowDelete(show._id)}>Delete</button>
    </div>
  );
};

export default Show;
