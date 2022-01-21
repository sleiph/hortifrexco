import CardFruta from '../components/CardFruta'

import React, { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';
import api from "../services/api";

import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 15px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 740px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 520px) {
    grid-template-columns: auto;
  }
`

function Frutas({ carrinho, onCarrinhoChange }) {
  const [frutas, setFrutas] = useState();

  useEffect(() => {
    api
      .get(`/api/fruit/all`,)
      .then((response) => setFrutas(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
      });
  }, []);

  return (
    <Grid >
      {
        frutas?.map(fruta => {
          return(
            <CardFruta fruta={fruta} carrinho={carrinho} onCarrinhoChange={onCarrinhoChange} key={fruta.name} />
          );
        })
      }
      <Outlet />
    </Grid>
  );
}

export default Frutas