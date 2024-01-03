import React, { useState } from 'react';
import { ItemCard2, ModalCardItem2 } from './styled.CardItem2';

export default function CardItem2({ character }) {
  const [modalView, setModalView] = useState(false);

  const showModal = () => {
    setModalView(true);
  };



  return (
    <ItemCard2>
      <span className="badge bg-secondary">{character.id}</span>
      <span>
        {character.status === 'Alive'
          ? '🟢 Alive'
          : character.status === 'unknown'
          ? '🟠 Unknown'
          : '🔴 Dead'}
      </span>
      <img src={character.image} alt="character" />

    <button onClick={()=>{setModalView(true)}}>🔍 {character.name}</button>

      {modalView && (
        <ModalCardItem2 className={modalView ? 'modalContainer active' : 'modalContainer'}>
          <img src={character.image} alt="character" />
          <button onClick={()=>{setModalView(false)}}>VOLTAR AOS PERSONAGENS</button>

          <h2>{character.name}</h2>
          <div>
            <p>ID #0{character.id}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
          </div>
        </ModalCardItem2>
      )}
    </ItemCard2>
  );
}
