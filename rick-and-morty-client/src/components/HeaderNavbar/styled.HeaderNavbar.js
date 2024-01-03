import styled from "styled-components";

export const HeaderNavbarComponent = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: var(--gray-medium);
  border-bottom: 2px solid greenyellow;
  border-radius: 4px 4px 0 0;

  h1 {
    margin-top: 0; /* Ajustando o espaçamento superior */
    z-index: 11;
    color: var(--pink-fuchsia); /* Adicionando cor ao título */
    font-size: 24px; /* Exemplo de tamanho de fonte */
    font-weight: bold; /* Adicionando negrito */
    text-align: center; /* Centralizando o texto */
    padding-top: 90px;
  }

  button {
    z-index: 11;
    background: var(--pink-fuchsia);
    padding: 0.4rem;
    border-radius: 22px;
    width: 120px;
    font-weight: 900; /* Corrigindo o typo "weight" para "font-weight" */
    color: white;
    border: 2px solid greenyellow;
    margin-top: 10px; /* Adicionando espaço acima do botão */
    cursor: pointer; /* Mostrar cursor ao passar por cima do botão */
    transition: background 0.3s ease-in-out; /* Adicionando transição suave */
    /* Estilização ao passar o mouse */
    &:hover {
      background: var(--pink-lighter); /* Mudando a cor ao passar o mouse */
    }
  }
`;
