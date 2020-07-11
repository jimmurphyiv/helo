require('dotenv').config();

const express = require('express');

const mainCtrl = require('./controllers/mainController');
const massive = require('massive');

const {SERVER_PORT, CONNECTION_STRING} = process.env
const app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connect, Holla')
});

app.listen(SERVER_PORT, () => console.log('Holla at a port 4774'));