const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors')
const port = 3000

app.use(cors());
app.use(express.json());

let shows = [];

function loadShowsToJson() {
  try {
    const jsonData = fs.readFileSync('./server/data.json', 'utf8');
    shows = JSON.parse(jsonData);
  }catch (error) {
    console.error('Error reading JSON file:', error);
  }
}

// Peticion get para obtener el listado de obras (para la cartelera)
app.get('/shows', (req, res) => {
  try {
    res.send(shows);
  }catch (error) {
    res.sendStatus(500);
  }
});

// Peticion get para obtener los detalles de una obra por el ID
app.get('/shows/:id', (req, res) => {
  const numberID = parseInt(req.params.id);
  const result = shows.filter(show => show.id === numberID);
  if (result.length > 0) {
    res.send(result);
  } else {
    res.sendStatus(404);
  }
});

// Peticion get para obtener obras por género
app.get('/shows/genre/:genre', (req, res) => {
  const genre = req.params.genre.toLowerCase(); 
  const result = shows.filter(show => show.genre.toLowerCase() === genre);
  if (result.length > 0) {
    res.send(result);
  }else {
    res.sendStatus(404);
  }
});


app.listen(port, () => {
  loadShowsToJson();
  console.log(`App listening on port ${port}`);
});