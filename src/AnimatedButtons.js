import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const colorChangeAnimation = keyframes`
  from {
    background-color: #3498db;
  }
  to {
    background-color: #379683;
  }
`;
const ButtonSection = styled.div`
    background-color: #EDF5E1;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 800px;
    overflow: auto; 
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  animation: ${fadeInUpAnimation} 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
`;

const Button = styled.button`
  padding: 15px 25px;
  margin: 0 15px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background-color: #05386B;
  color: #EDF5E1;
  cursor: pointer;
  transition: background-color 0.5s, transform 0.5s;

  &:hover {
    background-color: #5CDB95;
    transform: scale(1.1) translateY(-5px);
    animation: ${colorChangeAnimation} 0.5s linear forwards;
  }
`;


const AnimatedButtons = () => {
  return (
    <ButtonSection>
    <ButtonsContainer>
      <Button onClick={() => window.location.href = '/bio'}>About</Button>
      <Button onClick={() => window.location.href = '/projects'}>Projects</Button>
      <Button onClick={() => window.location.href = '/marketostuff'}>Marketo Stuff</Button>
      <Button onClick={() => window.location.href = '/contact'}>Contact</Button>
    </ButtonsContainer>
    </ButtonSection>
  );
};

export default AnimatedButtons;
