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
- Jest (testes)

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

Validação de dados

## 🏗 Arquitetura

Controllers

Services

Validações (Zod)

Prisma ORM

Banco PostgreSQL