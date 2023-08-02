import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 8px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Contact = () => {
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
    }))
}
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
};
return (
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
    </ContactContainer>
);
}
export default Contact;