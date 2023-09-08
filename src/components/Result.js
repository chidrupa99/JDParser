// src/components/Result.js
import React from 'react';
import ResultCard from './ResultCard';

const Result = ({ parsedData }) => {
  return (
    <div className='results-section'>
      <h2 className='jd--heading'>Parsed Information</h2>
      <ResultCard Title="Salary" Data={parsedData.salary} />
      <ResultCard Title="Experience" Data={parsedData.experience}/>
      <ResultCard Title="Location" Data={parsedData.location}/>
      <ResultCard Title="Visa information" Data={parsedData.visaInfo}/>
    </div>
  );
};

export default Result;
