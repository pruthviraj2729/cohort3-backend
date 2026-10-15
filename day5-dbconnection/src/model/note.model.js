const { default: mongoose } = require("mongoose");

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        minlength: 10,
    },
})
const NotesModel = mongoose.model('notes', noteSchema)
module.exports = NotesModel;

// const mongoose = require('mongoose')

// const notesSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         minlength: 10,
//     },
// });

// const NotesModel = mongoose.model('notes', notesSchema)

// module.exports = NotesModel;