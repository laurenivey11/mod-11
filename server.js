
const express = require('express');
const { notes } = require("./db/db.json");
const app = express();

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });