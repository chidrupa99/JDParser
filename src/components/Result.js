// src/components/Result.js
import React from 'react';
import ResultCard from './ResultCard';

const Result = ({ parsedData }) => {
  return (
    <div className='results-section'>
      <h2 className='jd--heading'>Parsed Information</h2>
      <ResultCard color="#311465" Title="Salary" Data={parsedData.salary} />
      <ResultCard color="#311465" Title="Experience" Data={parsedData.experience}/>
      <ResultCard color="#311465" Title="Skills" Data={parsedData.skills}/>
      <ResultCard color="#311465" Title="Visa information" Data={parsedData.visaInfo}/>
    </div>
  );
};

export default Result;