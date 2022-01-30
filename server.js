const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const port = 3001;

app.use(bodyParser.json({ type: "application/*+json" }));
app.use(cors());

app.get("/coins", async (req, res) => {
  const { data } = await axios.get("https://api.coinranking.com/v2/coins", {
    headers: {
      "x-access-token":
        "coinrankingae7bc3454a696a664b91a561b298da166cbc197a0de7683e",
    },
  });
  res.json(data);
});

app.listen(port, () => console.log(`Server running on port: ${port}`));
