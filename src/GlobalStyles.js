import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    body,
    h1, h2, h3, h4, h5, h6,
    p, ul, li,
    button {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', Arial, sans-serif;
        line-height: 1.6;
        background-color: #f5f5f5;
        color: #333;
    }

    h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.2rem;
  }


  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }


  a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }

  a:hover {
    color: #0056b3;
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
  }

  button:hover {
    background-color: #0056b3;
  }
`;

export default GlobalStyle;