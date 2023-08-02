import React from "react";
import styled from 'styled-components';
const BioSection = styled.div`
    background-color: #f0f0f0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;
const Bio = () => {
    return (
        <BioSection>
            <h1>Bio test</h1>
        </BioSection>
    )
}
export default Bio;
