require('dotenv').config();
const session = require('express-session');
const express = require('express');
const authCtrl = require('./controllers/authController');
const mainCtrl = require('./controllers/mainController');
const massive = require('massive');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const app = express();

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 14}
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connect, Holla')
});

app.post('/auth/register',  authCtrl.register);
// app.post('/auth/Login', authCtrl.login)
app.listen(SERVER_PORT, () => console.log('Holla at a port 4774'));