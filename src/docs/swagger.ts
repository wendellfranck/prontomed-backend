export const swaggerDocument = {
    openapi: "3.0.0",
    info: {
      title: "ProntoMed API",
      version: "1.0.0",
      description:
        "API de prontuário eletrônico para gestão de pacientes e consultas",
    },
    servers: [
      {
        url: process.env.NODE_ENV === "production"
          ? process.env.RENDER_EXTERNAL_URL
          : "http://localhost:3000",
      },
    ],
    paths: {
      "/patients": {
        get: {
          summary: "Listar pacientes",
          responses: {
            200: {
              description: "Lista de pacientes",
            },
          },
        },
        post: {
          summary: "Criar paciente",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    phone: { type: "string" },
                    email: { type: "string" },
                    birthDate: { type: "string", format: "date-time" },
                    sex: { type: "string", enum: ["M", "F"] },
                    height: { type: "number" },
                    weight: { type: "number" },
                  },
                  required: ["name", "birthDate", "sex", "height", "weight"],
                },
              },
            },
          },
          responses: {
            201: {
              description: "Paciente criado",
            },
          },
        },
      },
      "/patients/{id}": {
          put: {
            summary: "Atualizar paciente",
            parameters: [
              {
                name: "id",
                in: "path",
                required: true,
                schema: { type: "string", format: "uuid" },
              },
            ],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: { type: "object" },
                },
              },
            },
            responses: {
              200: { description: "Paciente atualizado" },
            },
          },
          delete: {
            summary: "Excluir paciente (LGPD - soft delete)",
            parameters: [
              {
                name: "id",
                in: "path",
                required: true,
                schema: { type: "string", format: "uuid" },
              },
            ],
            responses: {
              204: { description: "Paciente excluído" },
            },
          },
        },
        "/appointments": {
          post: {
            summary: "Criar agendamento",
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      patientId: { type: "string", format: "uuid" },
                      dateTime: { type: "string", format: "date-time" }
                    },
                    required: ["patientId", "dateTime"]
                  }
                }
              }
            },
            responses: {
              201: { description: "Agendamento criado" },
              400: { description: "Conflito de horário" }
            }
          },
          get: {
            summary: "Listar agendamentos",
            responses: {
              200: { description: "Lista de agendamentos" }
            }
          }
        },
        "/appointments/{id}": {
          put: {
            summary: "Atualizar agendamento",
            parameters: [
              {
                name: "id",
                in: "path",
                required: true,
                schema: { type: "string", format: "uuid" },
              },
            ],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      dateTime: { type: "string", format: "date-time" }
                    }
                  }
                }
              }
            },
            responses: {
              200: { description: "Agendamento atualizado" },
            },
          },
          delete: {
            summary: "Excluir agendamento",
            parameters: [
              {
                name: "id",
                in: "path",
                required: true,
                schema: { type: "string", format: "uuid" },
              },
            ],
            responses: {
              204: { description: "Agendamento excluído" },
            },
          },
        },
        "/appointments/{id}/notes": {
          post: {
            summary: "Criar anotação para um agendamento",
            parameters: [
              {
                name: "id",
                in: "path",
                required: true,
                schema: { type: "string", format: "uuid" },
              },
            ],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      note: { type: "string" },
                    },
                    required: ["note"],
                  },
                },
              },
            },
            responses: {
              201: { description: "Anotação criada" },
            },
          },
        },
        
        "/patients/{id}/notes": {
          get: {
            summary: "Listar anotações do paciente",
            parameters: [
              {
                name: "id",
                in: "path",
                required: true,
                schema: { type: "string", format: "uuid" },
              },
            ],
            responses: {
              200: { description: "Lista de anotações" },
            },
          },
        },
    },
};