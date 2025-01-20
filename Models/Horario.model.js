const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HorarioSchema = new Schema({
    dia: { type: String, required: true },
    horas: { type: String, required: true },
    aula: { type: String, required: true, index: true },
    classId: { type: Schema.Types.ObjectId, ref: 'Class', required: true }
  });

  const Horario = mongoose.model('Horario', HorarioSchema);
  module.exports = Horario;