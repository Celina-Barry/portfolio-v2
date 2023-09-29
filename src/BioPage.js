import React from "react";
import styled from "styled-components";
import FallingValues from "./FallingItems";
import Bio from "./Bio";

const HeaderSection = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 20vh;
    padding-top: 40px;
    color: #05386b;
    background-color: #edf5e1;
`;

const H1 = styled.h1`
    margin: 0;
    background-color: #edf5e1;
`;

const H3 = styled.h3`   
    
    display: flex;
    justify-content: left;
    padding-left: 70px;
    color: #05386b;
    background-color: #edf5e1;
`;
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    background-color: #edf5e1;
`;
const BioPage = () => {
    const values = ["Marketo +l10n", "Salesforce", "Hubspot", "Workato", "UA/GA4", "Looker", "Direct Mail", "Node.js", "JavaScript", "Express.js"];
    return (
        <ContentContainer>      
        <HeaderSection>
            <H1>About me</H1>
        </HeaderSection>
        <H3>Special skills:</H3>
            <FallingValues values={values} />
            <Bio />
        </ContentContainer>
    )
};

export default BioPage;