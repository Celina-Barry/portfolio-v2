import React from "react";
import styled, { keyframes } from 'styled-components';
import MousePattern from "./MousePattern";
const fadeIn = keyframes`
from {
    opacity: 0;
} to {
    opacity: 1;
}
`;
const HeroSection = styled.div`
    background-color: #f5f5f5;
    color: #333;
    padding: 80px 0;
    text-align: center;
    animation: ${fadeIn} 2s ease-in;
`;
const HeroTitle = styled.h1`
font-size: 3rem;
`;

const HeroSubtitle = styled.p`
font-size: 3rem;
`;

const Hero = () => {
    return(
    <HeroSection>
        <MousePattern />
        <HeroTitle>Hero Placeholder</HeroTitle>
        <HeroSubtitle>Some other test</HeroSubtitle>
    </HeroSection>
    );
};
export default Hero;