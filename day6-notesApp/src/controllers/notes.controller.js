const noteModel = require("../models/note.model");

const createNotesController = async(req, res) => {


    try {
        let { title, description} = req.body;

        let newNote = await noteModel.create({
        title,
        description,
        })

       return res.status(201).json({
        messgae: "note created successfully",
        data: newNote,
       })
    } catch (error) {
        console.log(error)
    }
    
}

const getAllNotesController = async(req, res) => {
    try {
        const allNotes = await noteModel.find();

        res.status(200).json({
            message: "All notes fetched",
            data: allNotes,
        })
    } catch (error) {
        console.log(error);
    }
}

const getSingleNoteController = async(req, res) => {
    try {
        let noteId = req.params.id;
        let note = await noteModel.findById(noteId);

        res.status(200).json({
            message: "note fetched successfully",
            data: note, 
        })
    } catch (error) {
        console.log("error in songle note api", error)
    }
}

const getUpdateNotesController = async(req, res) => {
    try {
        let noteId = req.params.id;
        let body = req.body

        let updatedNote = await noteModel.findByIdAndUpdate(noteId, body, {new: true});

        return res.status(200).json({
            message: "Note updated successfully",
            data: updatedNote,
        })
    } catch (error) {
        return res.json(500).json({
            message: "Internal server error",
        })
    }
}

const deleteNoteController = async(req, res) => {
    try {
        let noteId = req.params.id;

        await noteModel.findByIdAndDelete(noteId);

        return res.send(200).json({
            message: "note deleted successfully",
        })
    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
        })
    }
}

module.exports =  {
    createNotesController,

    getAllNotesController,

    getSingleNoteController,

    getUpdateNotesController,

    deleteNoteController,
}