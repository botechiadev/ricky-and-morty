import styled from "styled-components";

export const ItemCard1 = styled.li`
  display: block;
  width: 240px;
  list-style-type: none;
  background: ${(props) => props.bgSpace1 || "whitesmoke"};
  margin: 30px auto;
  border-radius: 33px;
  padding: 1rem;
  max-height: 300px;


  ul{
  list-style-position: inside;
  }s 
  img {
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    box-shadow: 0 0 10px greenyellow;
    transform: translateY(-5px);
  }

  h1 {
    text-shadow: 5px 5px black;
    font-size: 2rem;
    margin: 10px 0;
  }
`;
