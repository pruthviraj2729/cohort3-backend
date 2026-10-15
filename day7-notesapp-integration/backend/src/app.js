const express = require('express');
const notesRoutes = require('./router/notes.route');
const dbConnect = require('./config/db');
const cors = require('cors')

const app = express();

dbConnect()

app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json())


app.get('/', (req, res) => {
    res.send("ok got it")
})

app.use('/notes', notesRoutes)



module.exports = app;