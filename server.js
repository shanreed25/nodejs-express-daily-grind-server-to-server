import express from 'express';
import axios from "axios";

const app = express();
const port = 3000;

const FUN_FACTS_URL = "https://uselessfacts.jsph.pl/api/v2/facts/random";

app.get('/api/fun-fact', async (req, res) => {
  try {
    const response = await axios.get(FUN_FACTS_URL);

    const factObj = { fact: response.data.text }
    res.json(factObj);
  } catch (e) {
    //log the details on the server
    if (e.response) {//if the API replied with an error status
      console.error("Facts API responded with status:", e.response.status);
    } else {
      console.error("Error fetching fun fact:", e.message);
    }

    // respond with a 500 status and an error object.
    res.status(500).json({ error: "Could not fetch fun fact" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


