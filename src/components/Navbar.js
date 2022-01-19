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
  .nav-links li a {
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    transition: all 0.5s ease 0s;
  }
  .nav-links li a:hover {
    color: rgba(0, 173, 181, 0.8);
  }
`

export default function Navbar() {
  return (
    <NavBar>
      <span className="image-clickable">
        <a href="../">
          <img src="" alt="main-logo" className="logo" />
        </a>
      </span>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Pesquisar</a></li>
          <li><a href="./carrinho">Carrinho</a></li>
          <li><a href="./about">Sobre</a></li>
        </ul>
      </nav>
    </NavBar>
  );
}