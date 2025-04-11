const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const axios = require('axios');
require('dotenv').config();

router.post('/', upload.single('audio'), async (req, res) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/audio/transcriptions', req.file.buffer, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'audio/webm'
      },
      params: { model: 'whisper-1' }
    });

    res.json({ transcription: response.data.text });
  } catch (err) {
    console.error('Erro na transcrição:', err);
    res.status(500).json({ error: 'Erro ao transcrever áudio.' });
  }
});

module.exports = router;
