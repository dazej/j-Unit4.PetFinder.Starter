// import the pets array from data.js
const pets = require('./data');


// init express app
const express = require('express');
const app = express();



const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    //This function accepts a single parameter body that describes the body to be sent in the response.
   res.send("Homepage")

});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    //want to import pets data to this file using const pets = require('./data')
    //then send the data to the page (res.send)
    // then turn the data into a string using json (res.json)
    res.send({pets})
});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
    // target the owner key within each pet object 
    // then send the data to the webpage
    const {owner} = req.query
     

    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response
    res.send({pet})
});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    const {name} = req.params

    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);

    // send the pet as a response
    res.send(pet)
});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;