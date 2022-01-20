import React, { useCallback, useState } from "react";

import styled from 'styled-components'

const NavBar = styled.header`
  margin: 0.5rem 1.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .image-clickable {
    margin-right: auto;
  }
  .logo {
    height: 4.2rem;
    margin-right: auto;
  }

  .nav-links {
    list-style: none;
  }
  .nav-links li {
    display: inline-block;
    padding: 0 1.25rem;
  }
  .nav-links li button {
    font-size: 1rem;
    border:none;
    background: inherit;
  }
  .nav-links li button:hover {
    color: #eb5000;
  }
`
  
export default function Navbar({ carrinho, onCarrinhoChange, isNoCarrinho, setIsNoCarrinho }) {
  const handleIsNoCarrinhoChange = useCallback(() => {
    isNoCarrinho = !isNoCarrinho
    setIsNoCarrinho(isNoCarrinho)
    console.log(isNoCarrinho)
  }, [setIsNoCarrinho])

  return (
    <NavBar>
      <span className="image-clickable">
        <a href="../">
          <img src="" alt="main-logo" className="logo" />
        </a>
      </span>
      <nav>
        <ul className="nav-links">
          <li><button onClick={handleIsNoCarrinhoChange}>Carrinho <span>
            {(carrinho.length>0) ? new Set(carrinho).size : ""}
          </span></button></li>
        </ul>
      </nav>
    </NavBar>
  );
}