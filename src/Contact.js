import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const floatAnimation = keyframes`
    0% {
        transform: translateY(5900%);
        opacity: 1;
    }
    100% {
        transform: translateY(300%);
        opacity: 0;
    }
`;
const StyledDiv = styled.div`
    background-color: #8ee4af;
    padding: 50px;
    height: 100vh;

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
  z-index: 0;
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20%;
  animation: ${floatAnimation} ${(props) => props.duration || "5s"} linear infinite;
`;
const ContactContainer = styled.div`
  
  margin-top: 20px;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #edf5e1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  h2 {
    margin-top: 20px;
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #05386b;
  }

  label {
    display: block;
    margin-bottom: 8px;
    color: #379683;
  }

  input,
  textarea {
    width: 95%;
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #05386b;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  }

  button {
    background-color: #05386b;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #379683;
    }
  }
`;

const Contact = () => {
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
    const [formData, setFormData] =useState({
        name: '',
        email: '',
        message: '',
    });

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
}
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    //const myForm = new FormData(myForm);
  
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => alert("thank-you. Someone will reach out to you shortly"))
        .catch((error) => alert(error));

  
};
return (
  <StyledDiv>
    <ContactContainer>
        <h2>Get in touch</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                id="message"
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
        <BubbleContainer>
                {bubbles.map((bubble) => (
                    <Bubble
                    key={bubble.id}
                    duration={bubble.duration}
                    style={{ left: bubble.left }}
                    />
                ))}
        </BubbleContainer>
    </ContactContainer>
    </StyledDiv>
);
}
export default Contact;