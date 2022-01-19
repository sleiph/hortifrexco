import CardFruta from '../components/CardFruta'

import React, { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';
import api from "../services/api";

import styled from 'styled-components'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 15px;

  @media (max-width: 520px) {
    display: grid;
  }
`

export default function Frutas(  ) {
  const [frutas, setFrutas] = useState();

  useEffect(() => {
    api
      .get(`/api/fruit/all`)
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
            <CardFruta fruta={fruta} key={fruta.name} />
          );
        })
      }
      <Outlet />
    </Grid>
  );
}