
const express = require('express');
const { notes } = require("\Develop\notes.json");
const app = express();


app.get('/api/notes', (req,res) => {
    res.json(notes);
});

app.listen(2999, () => {
    console.log(`API server now on port 2999npm !`);
  });