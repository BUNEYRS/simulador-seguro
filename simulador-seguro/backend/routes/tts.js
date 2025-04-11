const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { text } = req.body;
  // Simulação de conversão de texto em voz
  res.json({ audio_url: "https://exemplo.com/audio.mp3" });
});

module.exports = router;
