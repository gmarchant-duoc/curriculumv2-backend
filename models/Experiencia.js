// models/Experiencia.js

const mongoose = require('mongoose');

const experienciaSchema = new mongoose.Schema({
  puesto: {
    type: String,
    required: [true, 'El puesto es obligatorio'],
    trim: true
  },
  empresa: {
    type: String,
    required: [true, 'La empresa es obligatoria'],
    trim: true
  },
  ubicacion: {
    type: String,
    trim: true
  },
  periodo: {
    type: String,
    trim: true
  },
  responsabilidades: [{
    type: String,
    trim: true
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Experiencia', experienciaSchema);