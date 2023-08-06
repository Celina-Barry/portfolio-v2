import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #05386b;
  color: #edf5e1;
  text-align: center;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 20px;
`;

const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

const HeaderSubtitle = styled.h2`
  font-size: 1.2rem;
  margin: 0;
  `;


const StyledDiv = styled.div`
    background-color: #8ee4af;
    padding: 50px;

`;
const Container = styled.a`
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #edf5e1;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    margin: 10px;
    text-decoration: none;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
    }
    &:active {
        transform: translateY(0);
        box-shadow: 0px, 2px, 3px, rgba(0, 0, 0, 0.1);
    }

`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #05386b;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #379683;
`;

const Projects = () => {
  return (
    <StyledDiv>
        <StyledHeader>
            <HeaderTitle>Cool Projects</HeaderTitle>
            <HeaderSubtitle>Check out our latest creations!</HeaderSubtitle>
        </StyledHeader>
        <Container href="https://github.com/Celina-Barry/project-js-nyan-cat-open">
            <Image src="../nyan-cat.png" alt="Project 1" />
            <TextContainer>
                <Title>Nyan Cat </Title>
                <Description>
                    This game was built using object oriented programming. You play as a cheeseburger and try to avoid the Nyan cats who are dropping from the sky. If you are hit by a Nyan Cat, you die, but the longer you stay alive, the higher the score. 
                </Description>
            </TextContainer>
        </Container>
        <Container href="https://github.com/Celina-Barry/react-effects-cookie-clicker">
            <Image src="../cookie-counter.png" alt="Project 2" />
            <TextContainer>
                <Title>Cookie Clicker</Title>
                <Description>
                    This in an idle game. Click the cookie to earn a cookie. Use cookies to buy resources that will grow more cookies for you.
                </Description>
            </TextContainer>
        </Container>
    <Container href="https://github.com/Celina-Barry/project-hangman">
        <Image src="../Hangman.png" alt="Hangman" />
        <TextContainer>
            <Title>Hang 'em</Title>
            <Description>
            Simple hangman game using react.
            </Description>
        </TextContainer>
    </Container>
    <Container href="https://github.com/Celina-Barry/pizza-shop">
        <Image src="../pizza-shop.png" alt="Hangman" />
        <TextContainer>
            <Title>Pizza Shop</Title>
            <Description>
            Interactive website to order pizzas.
            </Description>
        </TextContainer>
    </Container>


    </StyledDiv>
  );
};

export default Projects;
