// models/InformacionPersonal.js

const mongoose = require('mongoose');

const informacionPersonalSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true
  },
  titulo: {
    type: String,
    required: [true, 'El título es obligatorio'],
    trim: true
  },
  ubicacion: {
    type: String,
    trim: true
  },
  descripcion: {
    type: String,
    trim: true
  }
}, {
  timestamps: true  // Agrega createdAt y updatedAt automáticamente
});

module.exports = mongoose.model('InformacionPersonal', informacionPersonalSchema);