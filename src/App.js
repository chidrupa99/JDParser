import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import Result from './components/Result';
import EmptyResult from './components/EmptyResult'

function App() {
  const [parsedData, setParsedData] = useState({});

  const parseJobDescription = (jobDescription) => {
    // Define regular expressions to capture relevant information
    const salaryRegex = /[^.!?]*(?:\$|USD)[^.!?]*[.!?]/g;
    const experienceSentenceRegex = /\b(\d+\s?\+\s?years?(?:\s?(?:of)?\s?(?:professional)?\s?(?:work)?\s?(?:experience)?)?)\b/gi;
    const locationRegex = /\b(\b[A-Za-z\s]+,\s?[A-Za-z\s]+\b)/gi;
    const visaSentenceRegex = /.*\bvisa\b.*?[.!?]/i;
  
    // Extract information using regular expressions
    const salaryMatches = jobDescription.match(salaryRegex);
    const experienceSentences = jobDescription.match(experienceSentenceRegex);
    const locationMatches = jobDescription.match(locationRegex);
    const visaSentenceMatch = jobDescription.match(visaSentenceRegex);
  
    // Extracted information arrays
    const extractedSalaries = salaryMatches || [];
    const formattedSalaries = extractedSalaries.map((sentence, index) => (
      <li key={index}>{sentence.trim()}</li>
    ));
    // const extractedExperiences = experienceMatches || [];
    const extractedLocations = locationMatches || [];
    // const extractedVisaInfo = visaMatches || [];
  
    // Convert arrays to strings
    let experienceInfo = 'Experience information not found';
    if (experienceSentences) {
      experienceInfo = (
        <ul>
          {experienceSentences.map((sentence, index) => (
            <li key={index}>{sentence}</li>
          ))}
        </ul>
      );
    }

    const location = extractedLocations.join(', ') || 'Not specified';
    
    let visaInfo = 'Visa information not found';
    if (visaSentenceMatch && visaSentenceMatch.length > 0) {
      visaInfo = visaSentenceMatch[0].trim();
    }
  
    // Update the state with the extracted information
    const salary = "Bachelor's Degree in Industrial Design, Product Design, Human Computer Interaction, or related field AND 3+ years of industry experience working in product or service design, especially on complex problems, OR equivalent experience (e.g., experience using design thinking to solve problems)."
    const experience = "Bachelor's Degree in Industrial Design, Product Design, Human Computer Interaction, or related field AND 3+ years of industry experience working in product or service design, especially on complex problems, OR equivalent experience (e.g., experience using design thinking to solve problems)."
    const skills = [
      "UX",
      "IxD",
      "Visual Design",
      "Figma",
      "Adobe XD",
      "Illustrator",
      "Photoshop",
      "design tools",
      "web standards",
      "accessibility guidelines",
      "early design concepts",
      "prototyping",
      "sketching",
      "information architecture",
      "interaction design",
      "usability",
      "ideation solutions",
      "craftsmanship",
      "insight",
      "user experiences",
      "research insights",
      "inclusive design",
      "accessible thinking"
    ].map((skill) => <div className='pill--bg'>{skill}</div>)

    
    
    // const visaInfo = "Bachelor's Degree in Industrial Design, Product Design, Human Computer Interaction, or related field AND 3+ years of industry experience working in product or service design, especially on complex problems, OR equivalent experience (e.g., experience using design thinking to solve problems)."

    setParsedData({
      salary: formattedSalaries.length > 0 ? formattedSalaries : ['Not specified'],
      experience: experienceInfo,
      skills,
      visaInfo: visaInfo,
    });
  };
  

  return (
    <div className="App">
      <InputForm onParse={parseJobDescription} />
      {Object.keys(parsedData).length > 0 ? <Result parsedData={parsedData} /> : <EmptyResult/>}
    </div>
  );
}

export default App;
