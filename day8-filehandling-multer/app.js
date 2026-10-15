const express = require('express')
const router = require('./src/routes/file.route')

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('backend running successfully')
})

app.use('/router', router);

module.exports = app