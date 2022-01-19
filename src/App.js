import Home from './pages/Home'
import Frutas from './pages/Frutas'
import Fruta from './pages/Fruta'
import Carrinho from './pages/Carrinho'
import About from './pages/About'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="carrinho" element={<Carrinho />} />
        <Route path="frutas" element={<Frutas />} />
        <Route path="frutas/:caminho" element={<Fruta />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}