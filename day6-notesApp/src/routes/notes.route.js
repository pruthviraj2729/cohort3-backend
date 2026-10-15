const express = require("express");
const {createNotesController, getAllNotesController, getSingleNoteController, getUpdateNotesController, deleteNoteController }= require("../controllers/notes.controller");
const noteModel = require("../models/note.model");


const router = express.Router();

// CREATE
router.post("/create", createNotesController);

// READ
router.get("/allNotes", getAllNotesController);

// READ ONE
router.get("/:id", getSingleNoteController);

// UPDATE
router.put("/:id", getUpdateNotesController);

// DELETE
router.delete("/:id", deleteNoteController)

module.exports = router