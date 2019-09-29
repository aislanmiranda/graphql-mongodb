# graphql-mongodb

Simples estrutura de projeto GraphQL e MongoDB

## Rodar projeto
> **Importante:** Certifique-se de ter instalado em seu host o banco de dados MongoDB seja via [Docker] (https://hub.docker.com/_/mongo) ou [On Premises] (https://www.mongodb.com/download-center/charts).

```bash
# Crie arquivo .env na raiz do projeto e aponte para seu banco de dados mongo, conforme abaixo
DB_HOST=mongodb://localhost:27017/GRAPHQL

# Rode abaixo
yarn install
yarn start
```