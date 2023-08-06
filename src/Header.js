import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
    transform: rotate(360deg);
    }
`;

const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
background-color: #05386B;
color: #EDF5E1;
`;

const NavLinks =styled.nav`
display: flex;

`;

const NavLink = styled(Link)`
text-decoration: none;
color: #EDF5E1;
margin-right: 1rem;
&:hover {
    color: #8EE4Af;
    font-style: bold;
}
`;

const IconContainer = styled.div`
display: flex;
align-items: center;

`;

const IconLink = styled.a`
    text-decoration: none;
    margin-left: 1rem;
`;

const Icon = styled(FontAwesomeIcon)`
    font-size: 1.5rem;
    margin-left: 1rem;
    padding: 5px;
    color: #EDF5E1;
    cursor: pointer;

&:hover {
    animation: ${spinAnimation} 1s linear infinite;
    color: #8EE4Af;
    font-size: 1.75rem;
    }
`;


// icon({name: 'user', family: 'classic', style: 'solid'})
// icon({name: 'user', family: 'classic', style: 'regular'})
// icon({name: 'twitter', family: 'classic', style: 'brands'})

// icon({name: 'user', style: 'solid'})
// icon({name: 'user', style: 'regular'})
// icon({name: 'twitter', style: 'brands'})

icon({name: 'user'})

const Header = () => {
    return (
        <HeaderContainer>
        <NavLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/marketostuff">Marketo Stuff</NavLink>
            <NavLink to="/bio">About</NavLink>
        </NavLinks>
    <IconContainer>
    <IconLink href="https://twitter.com/Cel00786213">
    <Icon icon={icon({ name: 'twitter', style: 'brands' })} />
    </IconLink>
    <IconLink href="https://www.linkedin.com/in/celina-barry/">
    <Icon icon={icon({ name: 'linkedin', style: 'brands' })} /> 
    </IconLink>
    <IconLink href="https://github.com/Celina-Barry">  
    <Icon icon={icon({ name: 'github', style: 'brands' })} />
    </IconLink>
    <IconLink href="https://discordapp.com/users/578183409457823760">
    <Icon icon={icon({ name: 'discord', style: 'brands' })} />
    </IconLink>
    <IconLink href="mailto:celina.barry@gmail.com">
    <Icon icon={icon({ name: 'envelope', style: 'solid' })} />
    </IconLink>
    </IconContainer>    
    </HeaderContainer>
    );
};
  
export default Header;