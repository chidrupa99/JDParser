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
        <textarea id = "jd--input"
          cols="50"
          placeholder="Enter job description..."
          value={`Overview\nDo you want to create and deliver design experiences that transform the lives of millions of online learners around the world? Are you tired of proposing designs that don't always get implemented by your stakeholders? If you answered, \"Yes," then come join the Worldwide Learning (WWL) organization at Microsoft, where we imagine, create, and deliver the services and solutions that power online learning experiences globally. Being part of our cross-functional WWL Engineering Team will \"give you superpowers" to amplify the success of delivering your designs for these Learning Experiences. The overall market for online learning and technology solutions is projected to reach $350 billion by 2025, and has accelerated even more, since COVID-19, due to workers wanting to acquire professional and technical skills to help them stay competitive in the market.  \n\n\nMicrosoft's corporate mission is to \"empower every person and organization on the planet to achieve more." Learning is a critical lever to accelerate Microsoft’s growth as a digital transformation leader, and to enable our customers, our partners, and our employees to develop, achieve success, and thrive. As a UX Product Designer working within the Worldwide Learning (WWL) Engineering Team, you will have a direct impact on conceptualizing and creating learning experiences that help people advance their careers. \n\nQualifications\nBachelor's Degree in Industrial Design, Product Design, Human Computer Interaction, or related field AND 3+ years of industry experience working in product or service design, especially on complex problems, OR equivalent experience (e.g., experience using design thinking to solve problems).\nBonus if you've worked on web portals and Learning Management Systems (LMS).\nA strong portfolio, both in terms of demonstrating your experience (strong UX, IxD, and Visual Design skills) and as an example of your ability to create a compelling design presentation and be indicative of problem solving, creative thinking and the delivery of solid end to end scenarios.\nProficiency with Figma, Adobe XD, Illustrator, Photoshop (or equivalent design tools). \nCan work on early design concepts, and prototypes as well as, fit and finish, from an E2E design standpoint. \nGood knowledge of web standards and accessibility guidelines in making software experiences inclusive to all.\nExcellent visual, verbal, and written skills and the ability to present your work to peers across disciplines. \n \n\nUS-based employees gain access to healthcare benefits, a 401(k) plan and company match, short-term and long-term disability coverage, basic life insurance, and fitness benefits, among others.\n\nResponsibilities\nBe outcome-focused, utilizing storytelling, craftsmanship, and partnership, along with your insight to execute high-quality design work within time and technical constraints amid competing priorities and multiple stakeholders.\nGenerate ideation solutions to improve product designs. Comfortable using a variety of perspectives when ideating (e.g., business, experience, technology) by translating requirements into thoughtful and integrated design solutions, in an agile environment.\nDeliver design and innovation across multiple facets of the design process, including sketching, prototyping, storyboarding, information architecture, interaction design, production, and usability.\nCommunicate a compelling, convincing product story to a variety of audiences in a way that inspires excitement and support of the product. Helps organize communication with cross-disciplinary teams inside and across through all stages of design and development. Owns communication for what one is doing in a proactive way.\nUse customer feedback, and research insights to augment design direction. Improve user experiences through continuous iterative research processes for a product or feature area.\nWork with developers and business partners to iterate further on designs during implementation to ensure optimal designs.\nBe proactive with planning design deliverables and ask questions when you don’t know something. \nAdvocate for inclusive design and incorporate accessible thinking into designs.`}
          onChange={(e) => setJobDescription(e.target.value)}/>
        <button className="jd--submit" type="submit">Parse</button>
      </form>
    </div>
  );
};

export default InputForm;