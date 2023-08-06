import React from "react";
import styled from 'styled-components';
import SinkholeEffect from "./SinkholeEffect";

const HeroSection = styled.div`
    background-color: #5CDB95;
    color: #EDF5E1;
    padding: 80px 0;
    text-align: center;
    position: relative;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
        <HeroTitle>Welcome</HeroTitle>
        <HeroSubtitle>to my website!</HeroSubtitle>
        <SinkholeEffect numSinkholes={45} />
    </HeroSection>
    );
};
export default Hero;