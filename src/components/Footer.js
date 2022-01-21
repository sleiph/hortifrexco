import styled from 'styled-components'

const FooterDiv = styled.footer`
  background: #D3E4CD;
  margin-top: 24px;
  padding: 16px 40px;
  text-align: center;

  #logotipo {
    height: 40px;
  }

  #endereco {
    margin: 12px 0;
  }
  p {
    margin: 6px 0;
  }

  img {
    height: 28px;
  }

`

export default function Footer() {
  return (
    <FooterDiv>
      <img id="logotipo" src="/img/mecontratemplis-logo.svg" alt="logo" />

      <p id="endereco">Rua João Santana, 135 - Guarulhos, SP</p>
      <p>11 94520-0418</p>
      <p>
        <a href="https://github.com/sleiph" >
          <img src="/img/github.png" alt="logo-github" />
        </a> <a href="https://www.linkedin.com/in/ricardo-gomes-aa40a51b1/" >
          <img src="/img/linkedin.png" alt="logo-github" />
        </a></p>
    </FooterDiv>
  );
}