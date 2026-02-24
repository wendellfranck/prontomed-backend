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

Cadastro de pacientes

Edição de pacientes

Soft delete (LGPD)

Cadastro de agendamentos

Regra de conflito de horário

Registro de anotações

Validação de dados com Zod

Testes automatizados

Pipeline CI com GitHub Actions

## 🏗 Arquitetura

Controllers

Services

Validações

Prisma ORM

Banco PostgreSQL

Testes de integração


## CI/CD

A cada push na branch main:

- Instala dependências

- Executa migrations

- Roda lint

- Executa testes automatizados