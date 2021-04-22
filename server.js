const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, './the1975/dist/the1975')));

app.get('/', (req, res) => {
  res.send("Hello world!");
});

app.listen( port, () => {
  console.log('Listening on *:3000');
});
