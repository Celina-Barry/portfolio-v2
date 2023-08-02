import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import styled from 'styled-components';

const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
background-color: #333;
color: #fff;
`;

const NavLinks =styled.nav`
display: flex;
`;

const NavLink = styled(Link)`
text-decoration: none;
color: #fff;
margin-right: 1rem;
`;

const IconContainer = styled.div`
display: flex;
`;

const Icon = styled(FontAwesomeIcon)`
font-size: 1.5rem;
margin-left: 1rem;
color: #fff;

`
// Specify all properties: name, family, style
icon({name: 'user', family: 'classic', style: 'solid'})
icon({name: 'user', family: 'classic', style: 'regular'})
icon({name: 'twitter', family: 'classic', style: 'brands'})

// 'classic' is the default family, you can leave that off
icon({name: 'user', style: 'solid'})
icon({name: 'user', style: 'regular'})
icon({name: 'twitter', style: 'brands'})

// 'solid' is the default style, you can leave that off
icon({name: 'user'})

const Header = () => {
    return (
        <HeaderContainer>
        <NavLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/projects">Projects</NavLink>
        </NavLinks>
    <IconContainer>
      <FontAwesomeIcon icon={icon({ name: 'user-secret' })} /> {/* Defaults to the Classic family, Solid style */}
      <FontAwesomeIcon icon={icon({ name: 'twitter', style: 'brands' })} />
      <FontAwesomeIcon icon={icon({ name: 'linkedin', style: 'brands' })} />  {/* A brand icon */}
      <FontAwesomeIcon icon={icon({ name: 'github', style: 'brands' })} />
      <FontAwesomeIcon icon={icon({ name: 'discord', style: 'brands' })} />
      <FontAwesomeIcon icon={icon({ name: 'envelope', style: 'solid' })} />  
    </IconContainer>    
    </HeaderContainer>
    );
};
  
export default Header;