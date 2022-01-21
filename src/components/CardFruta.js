import Fruta from '../pages/Fruta'

import React, { useState } from "react";

import styled from 'styled-components'

const CardFrutadiv = styled.div`
  min-width: 200px;
  height: 160px;
  background: #fcc200;
  color: #000;
  text-align: center;
  display: grid;
  grid-template-rows: 2fr 1fr;

  .informacoes-card-fruta {
    align-self: center;
  }

  h3, p {
    margin: 0;
    padding: 0;
  }

  button {
    padding: 8px 16px;
    background: #00b400;
    border: none;
    font-size: 1em;
  }
  button:hover {
    background: #00cb00;
  }
`

function spliceNoMutate(myArray,indexToRemove) {
  return myArray.slice(0,indexToRemove).concat(myArray.slice(indexToRemove+1));
}

function ConfereArray(arr, ele) {
  for (let i=0; i<arr.length; i++) {
    if (arr[i].nome === ele.nome) {
      return spliceNoMutate(arr, i)
    }
  }
  return arr.concat([ele])
}

function CardFruta({ fruta, carrinho, onCarrinhoChange }) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <CardFrutadiv>
        <div className='informacoes-card-fruta'>
          <h3>{fruta.nome}</h3>
          <p>{fruta.quantidade}</p>
          <p>R$ {(fruta.preco).toFixed(2)}</p>
        </div>

        <div>
          <button onClick={ () => {
            onCarrinhoChange(ConfereArray(carrinho, fruta))
          } }>Adicionar</button>
          <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>🍽</p>
        </div>
        
      </CardFrutadiv>
      <Fruta fruta={fruta} isHovering={isHovering} />
    </div>
  );
}

export default CardFruta