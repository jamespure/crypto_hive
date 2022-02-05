const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({ type: "application/*+json" }));
app.use(cors());

app.get("/", async (req, res) => {
  const { data } = await axios.get("https://api.coinranking.com/v2/coins", {
    headers: {
      "x-access-token":
        process.env.TOKEN,
    },
  });
  res.json(data);
});

app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`));
