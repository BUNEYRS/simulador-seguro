const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.post('/', async (req, res) => {
  const { message } = req.body;
  const prompt = `Você é Paulo Henrique dos Santos, um cliente de banco. Responda como ele responderia essa abordagem: "${message}"`;

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-4',
      messages: [
        { role: 'system', content: prompt },
        { role: 'user', content: message }
      ]
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error('Erro com o GPT:', err.response?.data || err);
    res.status(500).json({ error: 'Erro ao obter resposta do GPT.' });
  }
});

module.exports = router;
