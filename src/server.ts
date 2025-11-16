import express from "express";
import faculdadeRouter from "./routes/FaculdadeRoutes";
import { AppDataSource } from "./database";

const app = express();
app.use(express.json());
app.use("/faculdade", faculdadeRouter);

AppDataSource.initialize()
    .then(() => {
        console.log("Conexão com o banco de dados estabelecida com sucesso.");
        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000.");

        });

    })

    .catch((error) => {
        console.error("Erro ao conectar com o banco de dados:", error);
        
    })