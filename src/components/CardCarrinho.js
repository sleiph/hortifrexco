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

function CardCarrinho({ fruta, carrinho, onCarrinhoChange }) {
  const [qnt, setQnt] = useState(1)

  return (
    <CardCarrinhodiv>
      <img src="" alt={"imagem da " + fruta} />
      <div>
      <p>{fruta} {qnt}</p>
      </div>
      
      <div className="botoes-card-carrinho">
        <button id="sub" onClick={ () => setQnt(qnt-1) }>-</button>
        <button id="add" onClick={ () => setQnt(qnt+1) }>+</button>

        <button id="rmv">remover</button>
      </div>
      
    </CardCarrinhodiv>
  );
}

export default CardCarrinho