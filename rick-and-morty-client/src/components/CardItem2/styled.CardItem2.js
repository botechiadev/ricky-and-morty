import styled from 'styled-components';

export const ItemCard2 = styled.li`
  width: 240px;
  list-style-type: none;
  background-color: whitesmoke;
  margin: 30px auto;
  border-radius: 33px;
  padding: 1rem;
  color: black;
  transition: box-shadow 0.3s ease-in-out; /* Adicionando transição suave */

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 255, 0, 0.5); /* Ajustando a cor do box-shadow */
  }

  img {
    max-width: 200px;
    height: 240px;
    background: whitesmoke;
    border: 3px groove greenyellow;
    border-radius: 22px;
  }

  h1 {
    text-shadow: 5px 5px black;
    font-size: 3rem;
    margin-top: 0;
  }
`;

export const ModalCardItem2 = styled.section`
  position: fixed;
  top: 10%;
  bottom: 10%;
  right: 5%;
  left: 5%;
  background: whitesmoke;
  border: 2px dashed greenyellow;
  border-radius: 22px;
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: var(--pink-fuchsia);
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: var(--pink-lighter);
    }
  }

  ul li {
    width: 100%;
    padding: 5px;
    font-weight: bold;
  }

  img {
    max-width: 100%;
    height: auto;
    max-height: 50%;
    margin-bottom: 20px;
    border-radius: 10px;
  }
`;
