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
    // shows.forEach((show, index) => {
    //   show.id = index + 1;
    // });
  }catch (error) {
    console.error('Error reading JSON file:', error);
  }
}

//PETICION GET PARA OBTENER EL LISTADO DE OBRAS (CARTELERA)
app.get('/shows', (req, res) => {
  try {
    res.send(shows);
  }catch (error) {
    res.sendStatus(500);
  }
});

//PETICION GET PARA OBTENER UNA OBRA POR EL ID
app.get('/shows/:id', (req, res) => {
  const numberID = parseInt(req.params.id);
  const result = shows.filter(show => show.id === numberID);
  if (result.length > 0) {
    res.send(result);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  loadShowsToJson();
  console.log(`App listening on port ${port}`);
});