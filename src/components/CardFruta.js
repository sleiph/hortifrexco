import React, { useCallback, useState } from "react";
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

function ConfereArray(arr, ele) {
  let temp = arr
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === ele) {
      temp.splice(i, 1)
      return temp
    }
  }
  return temp.concat([ele])
}

function CardFruta({ fruta, carrinho, onCarrinhoChange }) {

  return (
    <CardFrutadiv>
      <img src="" alt={"imagem da " + fruta.name} />
      <p>{fruta.name}</p>

      <button onClick={ () => {
        onCarrinhoChange(ConfereArray(carrinho, fruta.name))
      } }>adicionar ao carrinho</button>
      <Link to={`./frutas/${fruta.name}`} >
        <p>informações nutricionais</p>
      </ Link>
    </CardFrutadiv>
  );
}

export default CardFruta