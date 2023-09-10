import React from 'react';

const ResultCard = (props) => {
  const style={ borderLeft: `10px solid ${props.color}` }
  return (
    <div style={style} className='results-card-div'>
      <div className='results-details'>
        <h1 className='results--CardTitle'>{props.Title}</h1>
        <p className='results--CardData'>{props.Data}</p>
      </div>
    </div>
  );
};

export default ResultCard;