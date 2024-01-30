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

//OBRAS
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

//Peticion POST para agregar una obra
app.post('/shows', (req, res) => {
    try {
        const newShow = req.body;
        newShow.id = shows.length > 0 ? shows[shows.length - 1].id + 1 : 1;
        shows.push(newShow);
        fs.writeFileSync('./server/data.json', JSON.stringify(shows, null, 2), 'utf8');
        res.status(201).send('Show added successfully.');
    }catch (error) {
        res.sendStatus(500);
    }
});

//Peticion DELETE para eliminar una obra
app.delete('/shows/:id', (req, res) => {
    try {
        const showId = parseInt(req.params.id);
        const showToDelete = shows.findIndex(show => show.id === showId);
        shows.splice(showToDelete, 1);
        fs.writeFileSync('./server/data.json', JSON.stringify(shows, null, 2), 'utf8');
        res.send('Show deleted successfully.');
    }catch (error) {
        res.sendStatus(404);
    }
});

//Peticion PUT para actualizar una obra
app.put('/shows/:id', (req, res) => {
    const showId = parseInt(req.params.id);
    const showToUpdate = req.body;

    const showIndexToUpdate = shows.findIndex(show => show.id === showId);

    if(showIndexToUpdate !== -1) {
        shows[showIndexToUpdate] = {...shows[showIndexToUpdate], ...showToUpdate};
        fs.writeFileSync('./server/data.json', JSON.stringify(shows, null, 2), 'utf8');
        res.send('Show updated successfully.');
    }else {
        res.status(404).send('Show not found.');
    }
});


//GENEROS
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


//BUTACAS
//Peticion POST para manejar la reserva de los asientos
app.post('/shows/:id/reserved-seats', (req, res) => {
    const showId = parseInt(req.params.id);
    const selectedSeats = req.body.seats;

    const showIndex = shows.findIndex(show => show.id === showId);

    if (showIndex !== -1) {
        shows[showIndex].reservedSeats = [...shows[showIndex].reservedSeats, ...selectedSeats];
        fs.writeFileSync('./server/data.json', JSON.stringify(shows, null, 2), 'utf8');
        res.status(200).send({ reservedSeats: shows[showIndex].reservedSeats });
    } else {
        res.sendStatus(404);
    }
});


app.listen(port, () => {
    loadShowsToJson();
    console.log(`App listening on port ${port}`);
})