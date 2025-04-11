const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req, res) => res.send('Simulador de Seguro backend rodando!'));

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
