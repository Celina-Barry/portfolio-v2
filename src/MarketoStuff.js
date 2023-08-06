import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const floatAnimation = keyframes`
    0% {
        transform: translateY(1800%);
        opacity: 1;
    }
    100% {
        transform: translateY(-100%);
        opacity: 0;
    }
`;
const StyledPage = styled.div`
    background-color: #8ee4af;
    padding: 30px;
    height: 100vh;

`;
const StyledDiv = styled.div`
    background-color: #05386b;
    padding: 50px;
    border-radius: 1px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    position: relative;
    overflow: hidden;
    color: #5cdb95;
    text-align: center;
    height: 300px;
    border-radius: 10px;
    margin: 10px;
    
`;

const BubbleContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

const Bubble = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20%;
    animation: ${floatAnimation} ${(props) => props.duration || "5s"} linear infinite;
`;

const MarketoStuff = () => {
    const [bubbles, setBubbles] = useState([]);
    useEffect(() => {
    const numBubbles = 20;
    const newBubbles = [];

    for (let i = 0; i < numBubbles; i++) {
        newBubbles.push({
            id: i,
            left: `${Math.random() * 100}%`,
            duration: `${Math.random() * 4 + 2}s`,
        });
    }

    setBubbles(newBubbles);
}, []);

    return (
        <StyledPage>
        <StyledDiv>
            <h1>Coming Soon</h1>
            <BubbleContainer>
                {bubbles.map((bubble) => (
                    <Bubble
                    key={bubble.id}
                    duration={bubble.duration}
                    style={{ left: bubble.left }}
                    />
                ))}
        </BubbleContainer>
    </StyledDiv>
    </StyledPage>
    );
};

export default MarketoStuff;
