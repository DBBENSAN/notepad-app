const pages = require('express').Router();
const path = require('path');

// GET Route for homepage
pages.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// GET Route for notes page
pages.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = pages;