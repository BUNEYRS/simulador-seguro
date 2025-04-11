const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  // Simulação de transcrição de áudio
  res.json({ transcription: "Texto simulado da transcrição de voz do aluno." });
});

module.exports = router;
