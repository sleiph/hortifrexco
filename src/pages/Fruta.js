import React, { useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";

export default function Fruta() {
  const { caminho } = useParams();
  const [fruta, setFruta] = useState();

  useEffect(() => {
    api
      .get(`/api/fruit/${caminho}`)
      .then((response) => setFruta(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
      });
  }, []);
  console.log(caminho)

  return (
    <div className="App">
      <p>Genus: {fruta?.genus}</p>
      <p>Nome: {fruta?.name}</p>
      <p>Família: {fruta?.family}</p>
      <p>Ordem: {fruta?.order}</p>
      <ul>
        <li>Carboidratos: {fruta?.nutritions.carbohydrates}</li>
        <li>Proteínas: {fruta?.nutritions.protein}</li>
        <li>Gorduras: {fruta?.nutritions.fat}</li>
        <li>Calorias: {fruta?.nutritions.calories}</li>
        <li>Açúcares: {fruta?.nutritions.sugar}</li>
      </ul>
    </div>
  );
}