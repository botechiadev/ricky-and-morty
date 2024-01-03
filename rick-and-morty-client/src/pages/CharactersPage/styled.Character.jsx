// styled.Character.js
import styled from "styled-components";

export const CharactersComponent = styled.div`
  --primary-color: var(--pink-fuchsia);
  --secondary-color: black;
  --border-color: greenyellow;

  header {
    display: grid;
    /* Estilos do header */
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: var(--secondary-color);
    padding: 20px;
    margin: 0;
  }

  ul li {
    width: 240px;
    list-style-type: none;
    background-color: whitesmoke;
    margin: 20px;
    border-radius: 33px;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }

  ul li img {
    max-width: 100%;
    height: auto;
    max-height: 240px;
    background: whitesmoke;
    border: 3px groove var(--border-color);
    border-radius: 22px;
    object-fit: cover;
  }

  h1 {
    text-shadow: 5px 5px black;
    font-size: 3rem;
    margin-top: 0; /* Removendo o espaçamento superior do título */
  }
`
