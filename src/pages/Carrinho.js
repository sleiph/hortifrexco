import React, { useState } from "react";

import styled from 'styled-components'
import CardCarrinho from "../components/CardCarrinho";

const Aba = styled.div`
  margin: 0;
  padding: 0;
  width: 320px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;

  h2 {
    padding: 0 16px;
  }

  @media(max-width: 700px) {
    width: 100%;

    p {
      float: left;
    }
  }
`

function Carrinho({ carrinho, onCarrinhoChange }) {

  return (
    <Aba>
      <h2>Carrinho</h2>
      {
        carrinho.map(fruta => {
          return(
            <CardCarrinho key={fruta} fruta={fruta} carrinho={carrinho} onCarrinhoChange={onCarrinhoChange}/>
          );
        })
      }
    </Aba>
  );
}

export default Carrinho