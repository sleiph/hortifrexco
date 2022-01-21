# hortiFrexco 🍋

E-commerce de um hortifruti para o desafio de front-end da [Frexco](https://frexco.com.br/). O aplicativo usa a API [Fruityvice](https://www.fruityvice.com/doc/index.html), com React e javaScript.

![logo-hortifruti](/public/img/mecontratemplis-logo.svg)

## Tecnologias
Node | React | Router | Axios | styled-components

## Instruções

Para instalar os pacotes:
```shell
npm install
```

Para rodar o aplicativo, que fica ativo na [porta :3000](http://localhost:3000/):
```shell
npm start
```

### CORS
Como a API Fruityvice não envia `Access-Control-Allow-Origin`, é preciso contornar o CORS pro navegador aceitar o uso da API. Você precisa entrar na pasta que tem o `chrome.exe` e rodar o comando:
```shell
chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
```
Espero que não seja muito problema

Por causa desse erro do CORS eu resolvi criar um json para visualizar os produtos, para caso a API não funcione o aplicativo continuar funcionando, mas da pra ver no histórico do github que eu sei como listar os produtos a partir da resposta da API. =)
