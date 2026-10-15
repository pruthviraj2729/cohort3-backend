const { default: mongoose } = require("mongoose");


const NotesModel = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minlength: [10, "minimum 10 digits are required"],
    },
})

const noteModel = mongoose.model('notes', NotesModel);

module.exports = noteModel;