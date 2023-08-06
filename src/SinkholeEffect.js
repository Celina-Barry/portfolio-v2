import React from "react";
import styled, { keyframes } from "styled-components";

const sinkholeAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
`;

const Sinkhole = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #05386B;
  border-radius: 10%;
  animation: ${sinkholeAnimation} 3.5s forwards;
  opacity: 0;
`;

const SinkholeEffect = ({ numSinkholes }) => {
  const sinkholes = [];

  for (let i = 0; i < numSinkholes; i++) {
    sinkholes.push(<Sinkhole key={i} style={generateRandomPosition()} />);
  }

  return <>{sinkholes}</>;
};

const generateRandomPosition = () => {
  const xPos = `${Math.random() * 100}%`;
  const yPos = `${Math.random() * 100}%`;

  return {
    left: xPos,
    top: yPos,
  };
};

export default SinkholeEffect;
