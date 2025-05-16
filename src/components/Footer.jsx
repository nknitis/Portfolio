import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  padding: 1rem;
  background: #333;
  color: white;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>Connect with me on social media!</p>
      <div>
        <a href="https://leetcode.com/u/nL3yRCbO1v/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>Leetcode</a>
        <a href="https://www.linkedin.com/in/nitish-nitish-031666339/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>LinkedIn</a>
        <a href="https://www.linkedin.com/in/nitish-nitish-031666339/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>GFG</a>
        <a href="https://www.linkedin.com/in/nitish-nitish-031666339/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>LinkedIn</a>
      </div>
    </FooterSection>
  );
};

export default Footer;
