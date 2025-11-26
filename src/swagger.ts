import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options = {

  definition: {

    openapi: "3.0.0",
    info: {

      title: "Faculdade API",
      version: "1.0.0",
      description: "API para gerenciar turmas, disciplinas e professores",
    },
    servers: [{ url: "http://localhost:3000" }],
  },

  apis: ["./src/routes/*.ts", "./src/entities/*.ts", "./src/config/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Express) {

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}