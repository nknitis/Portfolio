// import React from 'react';
// import styled from 'styled-components';

// const AboutSection = styled.section`
//   padding: 3rem;
//   background: #f4f4f4;
//   text-align: center;
// `;

// const AboutTitle = styled.h2`
//   font-size: 2.5rem;
//   margin-bottom: 1rem;
// `;

// const AboutDescription = styled.p`
//   font-size: 1.2rem;
//   color: #555;
// `;

// const About = () => {
//   return (
//     <AboutSection>
//       <AboutTitle>About Me</AboutTitle>
//       <AboutDescription>
//         I am a passionate developer with experience in building modern web applications using React, Node.js, and more.
//       </AboutDescription>
//     </AboutSection>
//   );
// };

// export default About;

import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f9f9f9;
  padding: 4rem 2rem;
  text-align: center;
`;

const AboutContainer = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border: 4px solid #f39c12;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const BioText = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  max-width: 800px;
  margin-top: 1rem;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`;

const Skill = styled.li`
  background-color: #f39c12;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  margin: 5px;
  font-size: 1rem;
`;

const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <ProfileImage src="data:image/jpeg;base64,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" alt="Profile" />
        <Heading>About Me</Heading>
        <BioText>
          Hello! I'm Nitish, a passionate web developer with a love for building beautiful, user-friendly websites and applications. I specialize in front-end development with experience in React, JavaScript, C++, DSA  And Backend. I enjoy solving complex problems and learning new technologies to keep improving my skills.
        </BioText>
        
        <SkillsList>
          <Skill>HTML</Skill>
          <Skill>CSS</Skill>
          <Skill>JavaScript</Skill>
          <Skill>React</Skill>
          <Skill>Node.js</Skill>
          <Skill>Git</Skill>
        </SkillsList>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
