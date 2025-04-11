const express = require('express');
const router = express.Router();
const axios = require('axios');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

router.post('/', async (req, res) => {
  const { text } = req.body;
  const voice = 'nova'; // voz feminina brasileira

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

    const fileName = `audio-${uuidv4()}.mp3`;
    const filePath = `/tmp/${fileName}`;
    fs.writeFileSync(filePath, response.data);

    res.sendFile(filePath);
  } catch (err) {
    console.error('Erro com o TTS:', err.response?.data || err);
    res.status(500).json({ error: 'Erro ao converter texto em fala.' });
  }
});

module.exports = router;
