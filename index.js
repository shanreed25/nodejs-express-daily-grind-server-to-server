import express from 'express';

const app = express();
const port = 3000;

app.get('/api/fun-fact', async (req, res) => {
  try {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
    const funFactData = await response.json();
    res.json({ fact: funFactData.text });
  } catch (e) {

  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


