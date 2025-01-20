const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    sigla: {
        type: String,
        required: true
    },
    paralelo: {
        type: Number,
        required: true
    },
    asignatura: {
        type: String,
        required: true
    },
    cupos: {
        type: Number,
        required: true
    },
    docente: { 
        type: String, 
        required: true 
    },
    horarios: [{
        type: Schema.Types.ObjectId, ref: 'Horario'
    }]

});

const Class = mongoose.model('Class', ClassSchema);
module.exports = Class;