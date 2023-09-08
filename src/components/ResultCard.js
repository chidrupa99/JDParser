import React from 'react';

const ResultCard = (props) => {
  return (
    <div className='results-card-div'>
      <div className='results-details'>
        <h1 className='results--CardTitle'>{props.Title}</h1>
        <p className='results--CardData'>{props.Data}</p>
      </div>
    </div>
  );
};

export default ResultCard;