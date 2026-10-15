const noteModel = require('../models/note.model')

const createNotesController = async(req, res) => {

    try {
        let { title, description } = req.body;

        let note = await noteModel.create({
            title,
            description,
        })

        return res.status(201).json({
            message: "note created successfully",
            data: note
        })
    } catch (error) {
        return res.status(500).json({
            message: " internal server error"
        })
    }
}

const getAllNotesController = async (req,res) => {
    try {
        const allNotes = await noteModel.find()

        res.status(201).json({
            message:  "All notes fetched",
            data: allNotes,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

const getOneNoteController = async( req, res) => {
    try {
        let noteId = req.params.id;

        const singleNote = await noteModel.findById(noteId);

        return res.status(201).json({
            message: "note fetched successfully",
            data: singleNote,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'internal server error'
        })
    }
}

const deleteNoteController = async( req, res) => {
    try {
        let noteId = req.params.id;
        await noteModel.findByIdAndDelete(noteId);

        return res.send(200).json({
            message: "note deleted successfully",
        })
    } catch (error) {
        return res.send(201).json({
            message: "internal server error"
        })
    }
}

const getUpdateNotesController = async (req, res) => {
    try {
        let noteId = req.params.id;
        let body = req.body;

        const updatedNote = await noteModel.findByIdAndUpdate(noteId, body, {new:true})

        return res.status(201).json({
            message: "note updated successfully",
            data: updatedNote
        })
    } catch (error) {
        return res.send(500).json({
            message: "Internal server error"
        })
    }
}

module.exports = {
    createNotesController,
    getAllNotesController,
    getOneNoteController,
    deleteNoteController,
    getUpdateNotesController
}