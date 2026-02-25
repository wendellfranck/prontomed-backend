# 🏥 ProntoMed API

API REST para sistema de prontuário eletrônico.

## 🚀 Tecnologias

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- Docker
- Zod (validação)
- Swagger (documentação)
- Jest (testes automatizados)
- GitHub Actions (CI)

---

## 📦 Instalação

```bash
npm install

```

## 🐳 Subir banco com Docker

```bash
docker compose up -d

```

## 🗄 Rodar migrations

```bash
npx prisma migrate dev

```

## ▶️ Rodar aplicação

```bash
npm run dev
```

Servidor em:
http://localhost:3000


## 📘 Documentação Swagger

http://localhost:3000/docs


## 🧪 Rodar testes

```bash
npm test
```

## 📌 Funcionalidades

- [x] Cadastro de pacientes
- [x] Edição de pacientes
- [x] Soft delete (LGPD)
- [x] Cadastro de agendamentos
- [x] Regra de conflito de horário
- [x] Registro de anotações
- [x] Validação de dados com Zod
- [x] Testes automatizados
- [x] Pipeline CI com GitHub Actions

## 🏗 Arquitetura

A aplicação segue uma arquitetura em camadas:

- **Routes** → Definição das rotas da API
- **Controllers** → Camada de entrada HTTP
- **Services** → Regras de negócio
- **Prisma** → Camada de acesso ao banco de dados
- **Validações (Zod)** → Validação de entrada de dados
- **Testes de integração** → Garantia de comportamento esperado


## CI/CD

A cada push na branch main:

- Instala dependências

- Executa migrations com prisma migrate deploy

- Roda lint

- Executa testes automatizados


## 🌐 Deploy

API disponível em:
https://prontomed-backend.onrender.com

Documentação:
https://prontomed-backend.onrender.com/docs