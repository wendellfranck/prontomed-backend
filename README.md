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

## 🔑 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/prontomed"
PORT=3000
NODE_ENV=development
JWT_SECRET="supersecretkey"
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

## 🔐 Autenticação

1. Utilize `POST /auth/register` para criar um usuário.
2. Utilize `POST /auth/login` para obter o token JWT.
3. No Swagger, clique em **Authorize** e insira apenas o token retornado.
4. As demais rotas exigem autenticação.

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
- [x] Autenticação com JWT
- [x] Middleware de proteção de rotas

## 🏗 Arquitetura

A aplicação segue uma arquitetura em camadas:

- **Routes** → Definição das rotas da API
- **Controllers** → Camada de entrada HTTP
- **Services** → Regras de negócio
- **Prisma** → Camada de acesso ao banco de dados
- **Validações (Zod)** → Validação de entrada de dados
- **Testes de integração** → Garantia de comportamento esperado

## 📐 Modelagem do Banco de Dados

A aplicação utiliza três entidades principais: Patient, Appointment e ConsultationNote, com relacionamentos 1:N conforme descrito abaixo:

```mermaid
erDiagram

    PATIENT {
        uuid id PK
        string name
        string phone
        string email
        datetime birthDate
        string sex
        float height
        float weight
        datetime deletedAt
        datetime createdAt
        datetime updatedAt
    }

    APPOINTMENT {
        uuid id PK
        datetime dateTime
        uuid patientId FK
        datetime createdAt
        datetime updatedAt
    }

    CONSULTATION_NOTE {
        uuid id PK
        text note
        uuid appointmentId FK
        datetime createdAt
    }

    PATIENT ||--o{ APPOINTMENT : has
    APPOINTMENT ||--o{ CONSULTATION_NOTE : has

```

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