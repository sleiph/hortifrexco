import React from "react";

import Frutas from './Frutas'

import styled from 'styled-components'

const Container = styled.div`
  max-width: 80vw;
  margin: 0 auto;
`

export default function Home(  ) {

  return (
    <Container>
      <h1>Produtos</h1>
      <Frutas />
    </Container>
  );
}