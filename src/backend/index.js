import express from'express'
import { json } from 'express';

// "as-if" db lmao
let noteIndex = 1;
let notes = [];

const app = express();
app.use(express.json());

app.post("/notes", (req, res) => {
    try {
        const note = req.body;
        if (note.title == undefined || note.content == undefined) {
            res.status(400).json({"error": "Title is required"});
            return;
        }    
        notes[noteIndex] = {"id": noteIndex, "title": note.title, "content": note.content};
        noteIndex++;
        res.status(201).json(notes[noteIndex - 1]);
        
    } catch (e) {
        console.log(e);
        res.status(500).json({ "error": "Failed to create note" });
    }
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})