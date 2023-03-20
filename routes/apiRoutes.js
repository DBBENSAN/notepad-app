const notes = require("express").Router();
const { v4: uuidv4 } = require('uuid');


function noteList() {
   return new Promise((resolve, reject) => {
       let items = [];
       fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", (err, data) => {
           if (err) {
               reject(err);
           } else {
               if (data) {
                   items = JSON.parse(data);
               }
               resolve(items);
           }
       });
   });
}

notes.get("/", (req, res) => {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", (err, data) => {
        if (err) {
            console.error(err);
            res.status(502).json("Error reading notes.");
        } else {
            res.status(200).json(JSON.parse(data));
        }
    });
});


notes.post("/", (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4()
        };

        let notesArr = [];
        const currentNotes = noteList()
            .then((response) => {
                if (response === "Error") {
                    res.status(502).json('Error in saving note');
                } else {
                    notesArr = response;
                    notesArr.push(newNote);
                    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notesArr), (err) => {
                        if (err) {
                            console.log(err);
                            res.status(500).json("Error in saving note.");
                        } else {
                            res.status(201).json("Note added successfully.");
                        }
                    });
                }
            });
    }
});

notes.delete("/:id", (req, res) => {
    const id = req.params.id;
    let notesArr = [];
    const currentNotes = noteList()
        .then((response) => {
            if (response === "Error") {
                res.status(502).json("Error retrieving notes");
            } else {
                notesArr = response;
                let idx;
                for (let i = 0; i < notesArr.length; i++) {
                    if (notesArr[i].id === id) {
                        idx = i;
                        break;
                    }
                }
                notesArr.splice(idx, 1);
                fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notesArr), (err) => {
                    if (err) {
                        console.log(err);
                        res.status(500).json("Error in deleting note.");
                    } else {
                        res.status(200).json("Note deleted successfully.");
                    }
                });
            }
        })
});

module.exports = notes;
