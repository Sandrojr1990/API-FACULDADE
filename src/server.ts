import App from "./app";
import { AppDataSource } from "./database";

const app = new App();

AppDataSource.initialize()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
    const port = process.env.PORT || 3000;
    app.getApp().listen(Number(port), () => {
      console.log(`Servidor rodando na porta ${port}.`);
    });
  })

  .catch((error) => {
    console.error("Erro ao conectar com o banco de dados:", error);
  });
