import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import Result from './components/Result';

function App() {
  const [parsedData, setParsedData] = useState({});

  const parseJobDescription = (jobDescription) => {
    // Define regular expressions to capture relevant information
    const salarySentenceRegex = /[^.!?]*\$\s*[^.!?]*/gi;
    const experienceRegex = /\b(\d+(?:-\d+)?\s?\+?\s?years?(?:\s?(?:of)?\s?(?:professional)?\s?(?:work)?\s?(?:experience)?)?)\b/gi;
    const locationRegex = /\b(\b[A-Za-z\s]+,\s?[A-Za-z\s]+\b)/gi;
    const visaRegex = /\b(?:visa|work visa|H1B|H-1B|J-1|OPT|CPT|TN visa|sponsorship)\b/gi;
  
    // Extract information using regular expressions
    const salarySentences = jobDescription.match(salarySentenceRegex);
    const experienceMatches = jobDescription.match(experienceRegex);
    const locationMatches = jobDescription.match(locationRegex);
    const visaMatches = jobDescription.match(visaRegex);
  
    // Extracted information arrays
    // const extractedSalaries = salaryMatches || [];
    const extractedExperiences = experienceMatches || [];
    const extractedLocations = locationMatches || [];
    const extractedVisaInfo = visaMatches || [];
  
    // Convert arrays to strings
    const salaryInfo = salarySentences ? salarySentences.join('\n') : 'Salary information not found';
    const experience = extractedExperiences.join(', ') || 'Not specified';
    const location = extractedLocations.join(', ') || 'Not specified';
    const visaInfo = extractedVisaInfo.join(', ') || 'Not specified';
  
    // Update the state with the extracted information
    setParsedData({
      salary: salaryInfo,
      experience,
      location,
      visaInfo,
    });
  };
  

  return (
    <div className="App">
      <InputForm onParse={parseJobDescription} />
      {Object.keys(parsedData).length > 0 && <Result parsedData={parsedData} />}
    </div>
  );
}

export default App;
