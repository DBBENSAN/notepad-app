const notes = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

let id = 1;

const readFromFile = () => {
   const data = fs.readFileSync('./db/db.json', 'utf8');
   return JSON.parse(data);
};

const writeToFile = (data) => {
   fs.writeFileSync('./db/db.json', JSON.stringify(data));
};

// POST Route for creating a new note
notes.post('/', (req, res) => {
   console.log(req.body);

   const newNote = req.body;

   newNote.id = id++;
   console.log(newNote);

   const db = readFromFile();

   db.push(newNote);

   writeToFile(db);

   res.json(db);
});

// GET Route for retrieving all notes
notes.get('/', (req, res) => {
   const db = readFromFile();
   res.json(db);
});

// DELETE Route for deleting a note by id
notes.delete('/:id', (req, res) => {
   const db = readFromFile();
   const noteId = parseInt(req.params.id);

   const updatedDb = db.filter((note) => note.id !== noteId);

   writeToFile(updatedDb);

   res.json(updatedDb);
});

module.exports = notes;
