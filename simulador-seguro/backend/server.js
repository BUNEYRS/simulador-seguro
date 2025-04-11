const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/transcribe', require('./routes/transcribe'));
app.use('/gpt', require('./routes/gpt'));
app.use('/tts', require('./routes/tts'));

app.get('/', (req, res) => res.send('Simulador de Seguro backend rodando com IA!'));

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
