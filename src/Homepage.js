import React from "react";
import Hero from "./Hero";
import Bio from "./Bio";

import GlobalStyle from './GlobalStyles';

const Homepage = () => {
    return (
        <div>
            <GlobalStyle />
            <Hero />
            <Bio />
        </div>
    )
};

export default Homepage;