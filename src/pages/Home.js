import Frutas from './Frutas'

import React, { useState } from "react";

import styled from 'styled-components'

const Container = styled.div`
  max-width: 80vw;
  margin: 0 auto;
`

function Home({ carrinho, onCarrinhoChange }) {
  const [carrinhoLen, setCarrinhoLen] = useState(0)

  return (
    <Container>
      <h1>Produtos</h1>
      <Frutas carrinho={carrinho} onCarrinhoChange={onCarrinhoChange} />

    </Container>
  );
}

export default Home