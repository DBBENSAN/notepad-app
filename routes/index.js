const express = require('express');

// Import modular routers for notes, pages, and diagnostics
const notesRouter = require('./noteRoutes');
const pages = require('./pageRoutes');

const app = express();

// Use the notes, pages, and diagnostics routers for their respective paths
app.use('/api/notes', notesRouter);
app.use('/', pages);

module.exports = app;