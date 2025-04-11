const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { message } = req.body;
  // Simulação de resposta do GPT
  res.json({ reply: "Resposta simulada do cliente IA baseada na entrada: " + message });
});

module.exports = router;
