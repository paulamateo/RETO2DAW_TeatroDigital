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
        const jsonData = fs.readFileSync('./server/data.json', 'utf-8')
        shows = JSON.parse(jsonData);
    }catch (error) {
        console.error('Error reading JSON file: ', error);
    }
}


//Peticion GET para obtener las obras
app.get('/shows', (req, res) => {
    try {
        res.send(shows);
    }catch (error) {
        res.sendStatus(500);
    }
});

//Peticion GET para obtener los detalles de una obra por su id
app.get('/shows/:id', (req, res) => {
    const numberID = parseInt(req.params.id);
    const result = shows.filter(show => show.id  === numberID);
    if (result.length > 0) {
        res.send(result);
    }else {
        res.sendStatus(404);
    }
});

//Peticion GET para obtener las obras por su genero
app.get('/shows/genre/:genre', (req, res) => {
    const genre = req.params.genre.toLowerCase();
    const result = shows.filter(show => show.genre.toLowerCase() === genre);
    if (result.length > 0) {
        res.send(result);
    }else {
        res.sendStatus(404);
    }
});

//Peticion GET para obtener los generos
app.get('/genres', (req, res) => {
    let genres = [];
    for (let i = 0; i < shows.length; i++) {
        if (!genres.includes(shows[i].genre)) {
            genres.push(shows[i].genre);
        }
    }
    genres.sort();
    res.send(genres);
});

//Peticion POST
app.post('/shows/:id/reserved-seats', (req, res) => {
    const showId = parseInt(req.params.id);
    const selectedSeats = req.body.seats;
    const matchingShows = shows.filter(show => show.id === showId);

    if (matchingShows.length > 0) {
        const uniqueReservedSeats = selectedSeats.filter(seat => !matchingShows[0].reservedSeats.includes(seat));
        matchingShows[0].reservedSeats = matchingShows[0].reservedSeats.concat(uniqueReservedSeats);
        fs.writeFileSync('./server/data.json', JSON.stringify(shows, null, 2), 'utf8');
        res.status(200).send({ reservedSeats: matchingShows[0].reservedSeats });
    }else {
        res.sendStatus(404);
    }
});


app.listen(port, () => {
    loadShowsToJson();
    console.log(`App listening on port ${port}`);
})