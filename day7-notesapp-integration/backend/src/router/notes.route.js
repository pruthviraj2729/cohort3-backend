const express = require("express");
const { createNotesController, getAllNotesController, getOneNoteController, deleteNoteController, getUpdateNotesController } = require("../controllers/notes.controllers");

const router = express.Router();

router.post('/create', createNotesController)

// READ ALL
router.get('/allNotes', getAllNotesController)

// READ ONE
router.get('/:id', getOneNoteController)

// DELETE
router.delete('/:id', deleteNoteController)

// UPDATE
router.put('/:id', getUpdateNotesController)

module.exports = router