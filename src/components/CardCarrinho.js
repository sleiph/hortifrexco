import React, { useCallback, useState } from "react";

import styled from 'styled-components'

const CardCarrinhodiv = styled.div`
  width: 100%;
  height: 80px;
  background: #d8d8d8;
  color: #000;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
  grid-template-columns: 80px auto 80px;
  margin-bottom: 8px;

  &:hover {
    background: #ccc;
  }

  img {
    background: #404040;
  }

  .ids-card-carrinho {
    display: grid;
    align-items: center; 
    justify-content: left;
    grid-gap: 6px;
  }

  h4, p {
    margin: 0;
    padding: 0;
  }
  h4 {
    align-self: end;
  }
  p {
    align-self: baseline;
  }

  .botoes-card-carrinho {
    padding: 6px;
    display: grid;
    grid-gap: 6px;
    grid-template-areas: 
      "a b"
      "c c"; 
  }

  button {
    border: none;
    padding: 6px;
  }
  button:hover {
    background: #fcc200;
  }
  #sub { grid-area: a; }
  #add { grid-area: b; }
  #rmv { grid-area: c; }
`

function spliceNoMutate(myArray,indexToRemove) {
  return myArray.slice(0,indexToRemove).concat(myArray.slice(indexToRemove+1));
}

function ConfereArray(arr, ele) {
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === ele) {
      return spliceNoMutate(arr, i)
    }
  }
  return arr
}

function CardCarrinho({ fruta, carrinho, onCarrinhoChange }) {
  const [qnt, setQnt] = useState(1)

  return (
    <CardCarrinhodiv>
      <img src="" alt={"imagem da " + fruta} />
      <div className="ids-card-carrinho">
        <h4>{fruta}</h4>
        <p>quantidade: {qnt}</p>
      </div>
      
      <div className="botoes-card-carrinho">
        <button id="sub" onClick={ () => {
          if (qnt > 1)
            setQnt(qnt-1)
        }}>-</button>
        <button id="add" onClick={ () => setQnt(qnt+1) }>+</button>

        <button id="rmv" onClick={ () => {
          onCarrinhoChange( ConfereArray(carrinho, fruta) )
        }}>remover</button>
      </div>
      
    </CardCarrinhodiv>
  );
}

export default CardCarrinho