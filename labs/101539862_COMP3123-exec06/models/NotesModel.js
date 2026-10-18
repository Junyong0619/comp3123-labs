const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated
const NotesSchema = mongoose.Schema({
    noteTitle: {
        type: String,
        required: true
    },
    noteDescription: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum:["HIGH", "MEDIUM", "LOW"   ],
        required: true
    },
    dateAdded: {  // Method POST
        type: String,
        required: true
    },
    dateUpdated: { // Method PUT
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Note', NotesSchema);