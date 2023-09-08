// src/components/InputForm.js
import React, { useState } from 'react';

const InputForm = ({ onParse }) => {
  const [jobDescription, setJobDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onParse(jobDescription);
  };

  return (
    <div className='input--section'>
      <h2 className='jd--heading'>Job Description Parser</h2>
      <form onSubmit={handleSubmit}>
        <textarea className='jd--input'
          rows="30"
          cols="50"
          placeholder="Enter job description..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
        <button className="jd--submit" type="submit">Parse</button>
      </form>
    </div>
  );
};

export default InputForm;
