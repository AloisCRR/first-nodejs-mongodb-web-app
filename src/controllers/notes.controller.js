const ntsCtrl = {};
const Note = require('../models/note');

ntsCtrl.renderNoteForm = (req,res)=>{
    res.render('notes/add-page');
};

ntsCtrl.renderAddNote = async (req,res)=>{
    const { noteDescription, noteTitle } = req.body;
    const newNote = new Note({title: noteTitle, description: noteDescription});
    await newNote.save();
    res.redirect('/notes');
};

ntsCtrl.renderAllNotes = async (req, res)=>{
    const note = await Note.find();
    res.render('notes/all-notes', { note });
}

ntsCtrl.renderEditNote = (req,res)=>{
    res.send(req.params.id)
};

ntsCtrl.renderUpdateNote = (req, res)=>{
    res.send('updated')
}

ntsCtrl.renderDeleteNote = async (req, res) =>{
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('back');
}

module.exports = ntsCtrl;