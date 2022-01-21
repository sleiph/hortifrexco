import React, { useEffect, useState } from "react";

import styled from 'styled-components'

const CardNutricaoDiv = styled.div`
  background: #fff;
  position: absolute;
  margin-top: -5px;
  margin-left: 25px;
  padding: 12px;

  h4 {
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style-type: none;
    font-size: .9em;
  }
`

export default function Fruta({ fruta }) {
  return (
    <CardNutricaoDiv>
      <h4>Informações Nutricionais</h4>
      <ul>
        <li>Carboidratos: {fruta.nutritions.carbohydrates}</li>
        <li>Proteínas: {fruta.nutritions.protein}</li>
        <li>Gorduras: {fruta.nutritions.fat}</li>
        <li>Calorias: {fruta.nutritions.calories}</li>
        <li>Açúcares: {fruta.nutritions.sugar}</li>
      </ul>
    </CardNutricaoDiv>
  );
}