import Carrinho from './Carrinho'
import Frutas from './Frutas'

import React from "react";

import styled from 'styled-components'

const Corpo = styled.main`
  display: grid;
  grid-auto-flow: column;
`

const Container = styled.div`
  margin: 0 40px;
`

function Home({ carrinho, onCarrinhoChange, isNoCarrinho, setIsNoCarrinho }) {
  return (
    <Corpo>
      {
        (isNoCarrinho) ? <Carrinho carrinho={carrinho} onCarrinhoChange={onCarrinhoChange} /> : <></>
      }
      
      <Container>
        <h1>Produtos</h1>
        <Frutas carrinho={carrinho} onCarrinhoChange={onCarrinhoChange} />
      </Container>
    </Corpo>
      
  );
}

export default Home