import express from 'express';
import axios from 'axios';

const router = express.Router();
const cache = new Map();

router.get('/:word', async (req, res) => {
  const { word } = req.params;

  // Check cache
  const cached = cache.get(word);
  if (cached && (Date.now() - cached.timestamp) < Number(process.env.CACHE_TTL)) {
    return res.json(cached.data);
  }

  try {
    const { data } = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    // Save to cache
    cache.set(word, { data, timestamp: Date.now() });
    res.json(data);
  } catch (err) {
    if (err.response?.status === 404) {
      res.status(404).json({ error: 'Word not found' });
    } else {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  }
});

export default router;
