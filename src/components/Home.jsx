import React from 'react';
import styled from 'styled-components';

const HomeSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  background-color: #f4f4f4;
`;

const LeftContainer = styled.div`
  flex: 1;
  padding-right: 2rem;
`;

const RightContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-top: 1rem;
`;

const Home = () => {
  return (
    <HomeSection>
      {/* Left side for image */}
      <LeftContainer>
        <Image src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-coder-clipart-boy-working-with-computer-game-on-the-desk-vector-png-image_11072679.png" alt="My image" />
      </LeftContainer>

      {/* Right side for description */}
      <RightContainer>
        <Title>Welcome to My Portfolio</Title>
        <Description>
          Hello! I'm Nitish, Having strong Background Of Engineering From NIT DELHI passionate web developer with expertise in creating responsive and dynamic websites. Explore my work and feel free to reach out.
        </Description>
      </RightContainer>
    </HomeSection>
  );
};

export default Home;
