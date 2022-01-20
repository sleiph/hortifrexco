import Home from './pages/Home'
import Frutas from './pages/Frutas'
import Fruta from './pages/Fruta'
import Carrinho from './pages/Carrinho'
import About from './pages/About'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [carrinho, setCarrinho] = useState([])
  const [isNoCarrinho, setIsNoCarrinho] = useState(false)
  
  return (
    <div>
      <Navbar carrinho={carrinho} onCarrinhoChange={setCarrinho} isNoCarrinho={isNoCarrinho} setIsNoCarrinho={setIsNoCarrinho} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home carrinho={carrinho} onCarrinhoChange={setCarrinho}  isNoCarrinho={isNoCarrinho} setIsNoCarrinho={setIsNoCarrinho} />} />
          <Route path="carrinho" element={<Carrinho carrinho={carrinho} onCarrinhoChange={setCarrinho} />} />
          <Route path="frutas" element={<Frutas />} />
          <Route path="frutas/:caminho" element={<Fruta />} />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App