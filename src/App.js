import Home from './pages/Home'
import Carrinho from './pages/Carrinho'
import About from './pages/About'

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="carrinho" element={<Carrinho />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}