const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || "blue";

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to ${VERSION} Version</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} - ${VERSION}`);
});
