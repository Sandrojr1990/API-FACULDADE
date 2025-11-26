import App from "./app";
import { AppDataSource } from "./database";

const app = new App();

AppDataSource.initialize()
    .then(() => {
        console.log("Conexão com o banco de dados estabelecida com sucesso.");
        app.getApp().listen(3000, () => {
            console.log("Servidor rodando na porta 3000.");

        });

    })

    .catch((error) => {
        console.error("Erro ao conectar com o banco de dados:", error);
        
    })