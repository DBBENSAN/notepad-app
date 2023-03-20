# Note Taker

## Description
The Note Taker app is a Node.js application created using the express and uuid packages. This app allows users to create and store notes, as well as delete existing notes. The notes are saved in a JSON file using the file system module of Node.js.

Users can add a new note by clicking the "New Note" button, which will display a form for them to enter a title and content for their note. Once the user has filled out the form and clicked the "Save" button, the note will be added to the list of existing notes.

To delete a note, the user can click the "Delete" button next to the note they wish to remove. This will remove the note from the list of existing notes.

All notes are stored in a JSON file called db.json. The file is read when the application starts up, and any changes to the notes are saved back to the file using the file system module.

Overall, the Note Taker app provides a simple and convenient way for users to create and manage notes using a web-based interface

## Technologies Used:
| Dependency | URL |
|------------|-----|
| Node.js | https://nodejs.org/ |
| express | https://www.npmjs.com/package/express |
| uuid | https://www.npmjs.com/package/uuid |



## Installation

1. Clone the repository: `git clone git@github.com:DBBENSAN/notepad-app.git`
2. Navigate to the project directory: `cd notepad-app`
3. Install dependencies: `npm install`


## Usage
1. Start the development server: `npm start`
2. Open your browser and navigate to `http://localhost:3001`
3. Begin taking notes to create a new document or load an existing one.

You can access the note editor, online here:
```
https://lit-bayou-42687.herokuapp.com/
```