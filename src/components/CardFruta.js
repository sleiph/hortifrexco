import React from "react";
import { Link } from 'react-router-dom';

import styled from 'styled-components'

const CardFrutadiv = styled.div`
  min-width: 200px;
  height: 160px;
  background: #fcc200;
  color: #000;
  text-align: center;

  img {
    height: 80px;
  }
`

export default function CardFruta( fruta ) {

  return (
    <CardFrutadiv>
      <img src="" alt={"imagem da " + fruta.fruta.name} />
      <p>{fruta.fruta.name}</p>
      <button onClick={ () => {
        console.log(fruta.fruta.name)
      }}>adicionar ao carrinho</button>
      <Link to={`./frutas/${fruta.fruta.name}`} >
        <p>informações nutricionais</p>
      </ Link>
    </CardFrutadiv>
  );
}