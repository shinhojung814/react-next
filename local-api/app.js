const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 9000;
const { stores } = require("./data.js");

app.use(cors());
app.get("/stores", (req, res) => {
  res.json(stores);
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
