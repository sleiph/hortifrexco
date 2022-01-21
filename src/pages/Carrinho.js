import React, { useEffect, useState } from "react";

import styled from 'styled-components'
import CardCarrinho from "../components/CardCarrinho";

const Aba = styled.div`
  margin: 0;
  padding: 0;
  width: 320px;
  background-color: #f1f1f1;

  h2 {
    padding: 0 16px;
  }

  @media(max-width: 700px) {

  }
`

function Carrinho({ carrinho, onCarrinhoChange, isNoCarrinho }) {
  const [total, setTotal] = useState(0);

  return (
    <Aba style={{display: isNoCarrinho ? 'block' : 'none' }} >
      <h2>Carrinho</h2>
      {
      (carrinho !== undefined) ?
        carrinho.map(fruta => {
          return(
            <CardCarrinho key={fruta.nome} fruta={fruta} carrinho={carrinho} onCarrinhoChange={onCarrinhoChange} total={total} onTotalChange={setTotal} />
          );
        }) :
        <></>
      }
      <div className="total-carrinho">
        <h4>Total</h4>
        <p>R$ {(total).toFixed(2)}</p>
        <button onClick={() => {
          console.log( "me contrata" )
        }}>Finalizar compra</button>
      </div>
      <div className="limpar-carrinho">
        <button onClick={() => {
          onCarrinhoChange([])
          setTotal(0)
        }}>Limpar carrinho</button>
      </div>
    </Aba>
  );
}

export default Carrinho