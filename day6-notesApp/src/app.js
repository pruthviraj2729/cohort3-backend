const express = require('express');
const noteModel = require('./models/note.model');
const connectDB = require('./config/db');
const createNotesController = require('./controllers/notes.controller');
const notesRoutes = require("./routes/notes.route")

const app = express();

connectDB();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('ok got it')
});

app.use('/notes', notesRoutes)



module.exports = app;