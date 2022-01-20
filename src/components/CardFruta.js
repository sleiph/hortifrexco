import React, { useCallback } from "react";
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

function CardFruta({ fruta, carrinho, onCarrinhoChange }) {
  const handleCarrinhoChange = useCallback(() => {
    carrinho.push(fruta.name)
    onCarrinhoChange(carrinho)
  }, [onCarrinhoChange])

  return (
    <CardFrutadiv>
      <img src="" alt={"imagem da " + fruta.name} />
      <p>{fruta.name}</p>
      <button onClick={ handleCarrinhoChange }>adicionar ao carrinho</button>
      <Link to={`./frutas/${fruta.name}`} >
        <p>informações nutricionais</p>
      </ Link>
    </CardFrutadiv>
  );
}

export default CardFruta