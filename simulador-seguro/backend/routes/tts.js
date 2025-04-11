const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.post('/', async (req, res) => {
  const { text } = req.body;
  const voice = 'nova';

  try {
    const response = await axios.post('https://api.openai.com/v1/audio/speech', {
      model: 'tts-1',
      input: text,
      voice
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      responseType: 'arraybuffer'
    });

    res.set({
      'Content-Type': 'audio/mpeg',
      'Content-Disposition': 'inline; filename="voz.mp3"',
    });
    res.send(response.data);
  } catch (err) {
    console.error('Erro com o TTS:', err.response?.data || err);
    res.status(500).json({ error: 'Erro ao converter texto em fala.' });
  }
});

module.exports = router;
