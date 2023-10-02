import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fallAnimation = keyframes`
  from {
    transform: translateY(-500%);
  }
  to {
    transform: translateY(100%);
  }
`;
const FallingValuesContainer = styled.div`
    align-items: left;
    position: relative;
    background-color: #edf5e1;
    width: 90%;
    height: 20vh;
    overflow: visible;
    @media (max-width: 768px) {
    height: auto;
    }
`;

const FallingValue = styled.div`
    position: absolute;
    font-size: 18px;
    font-weight: bold;
    padding-right: 0px;
    padding-top: 10px;
    color: #05386b;
    animation: ${fallAnimation} ${({ animationDuration }) => animationDuration}s linear;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
    position: relative;
    background-color: #edf5e1;
`;


const FallingValues = ({ values }) => {
    const [fallingItems, setFallingItems] = useState([]);
    useEffect(() => {
    const generateFallingItems = () => {
        const newFallingItems = values.map((value, index) => ({
        id: index,
        value,
        animationDuration: Math.random() * 5 + 3,
        left: (index * 10) + 5,
        top: 20, 
    
    }));
    setFallingItems(newFallingItems);
    };

    generateFallingItems();
  }, [values]);

  return (
    <ContentContainer>
      <FallingValuesContainer>

        {fallingItems.map(item => (
        <FallingValue
            key={item.id}
            animationDuration={item.animationDuration}
            style={{ 
                left: `${item.left}%`, 
                top: `${item.top}px`,
                }}
            >
            {item.value}
        </FallingValue>
        ))}
      </FallingValuesContainer>
    </ContentContainer>
  );
};

export default FallingValues;
