const express = require("express");

const produtoRoutes = require("./src/routes/produto.routes");

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor rodando com sucesso!");
});

app.use("/produtos", produtoRoutes);

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
