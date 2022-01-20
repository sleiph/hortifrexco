import Carrinho from './Carrinho'
import Frutas from './Frutas'

import React from "react";

import styled from 'styled-components'

const Corpo = styled.main`

`

const Container = styled.div`
  max-width: 80vw;
  margin: 0 auto;
`

function Home({ carrinho, onCarrinhoChange, isNoCarrinho, setIsNoCarrinho }) {
  return (
    <Corpo>
      {
        (isNoCarrinho) ? <Carrinho carrinho={carrinho} onCarrinhoChange={onCarrinhoChange} /> : <></>
      }
      
      <Container style={{paddingLeft:(isNoCarrinho)? '400px' : '0'}}>
        <h1>Produtos</h1>
        <Frutas carrinho={carrinho} onCarrinhoChange={onCarrinhoChange} />
      </Container>
    </Corpo>
      
  );
}

export default Home