const express = require('express')
const { default: mongoose } = require('mongoose')
const NotesModel = require('./model/note.model')


const app = express()
app.use(express.json())

app.get('/', (req,res) => {
    res.send('backend is running successfully')
})

const dbConnect = async() => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI environment variable is required')
        }
        await mongoose.connect(process.env.MONGO_URI)
        console.log('db connected')
    } catch (error) {
        console.log(error)
    }
}

app.post('/create', async (req, res) => {
    let {title, description} = req.body;

       const newNote =  await NotesModel.create({
            title,
            description,

        })
    

    res.send({
        sucess: true,
        message: "Note created successfully",
        data: newNote,
    })
   
})

dbConnect()

module.exports = app
