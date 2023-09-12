import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
    background: green;
    padding: 15px;
    color: white;
    transition: background-color 0.3s, color 0.3s; /* Add transition */
  }

  button:hover {
    background-color: lightgreen;
    color: black;
  }

  img {
    max-height: 250px;
    object-fit: scale-down;
    border-radius: 20px 20px 0 0;
  }

  h3 {
    font-family: serif;
    font-size: 30px;
    color: blue;
  }

  h2 {
    font-family: cursive;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
