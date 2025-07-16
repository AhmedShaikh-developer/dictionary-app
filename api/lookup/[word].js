import axios from 'axios';

export default async function handler(req, res) {
  const { word } = req.query;
  try {
    const { data } = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    res.status(200).json(data);
  } catch (err) {
    if (err.response?.status === 404) {
      res.status(404).json({ error: 'Word not found' });
    } else {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  }
}
