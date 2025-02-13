import express from "express";
const app = express();

// Configurações do express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.send("API iniciada com sucesso!");
});

// Iniciando o servidor
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}`);
  }
});
