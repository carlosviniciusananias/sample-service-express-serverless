<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Projeto simples desenvolvido para entender melhor criação de endpoints simples com `express`, `cors` e implementando essa aplicação com `serverless`.

Na pasta **controllers** você deve achar alguns métodos pré-definidos e dentro da função pode aplicar a lógica que desejar. ;)

## Dependências

Para instalar as dependências do projeto basta rodar na raiz: `yarn install` ou `npm install`.

## AWS Lambda

Esse projeto contém um manipulador de `lambda` pré-definido. Você pode acessa-lo e modifica-lo em `lambda.js`.

Para subir sua aplicação sera necessário alguns passos:
- Acessar [AWS Command Line Interface](https://aws.amazon.com/pt/cli/), fazer download do cli (considera-se nesta explicação utilização do sistema operacional windows), acessar a `aws` via linha de comando com suas credências que podem ser geradas também no site da `aws`.
- Inserir sua `AWS Access Key ID` e `AWS Secret Access Key`.
- Inserir a região que deseja subir a `lambda`, exemplo: *us-east-1*.
- Após toda configuração basta rodar `serverless deploy` no terminal e pronto... sua lambda deve ser criada!

### Referências

- [Express](https://expressjs.com/pt-br/)
- [Cors](https://expressjs.com/en/resources/middleware/cors.html)
- [Serverless](https://www.serverless.com/)
