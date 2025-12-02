// controllers/curriculum.controller.js

const InformacionPersonal = require('../models/InformacionPersonal');
const Experiencia = require('../models/Experiencia');

// Obtener currículum completo
exports.obtenerCurriculum = async (req, res) => {
  try {
    const info = await InformacionPersonal.findOne();
    const experiencias = await Experiencia.find().sort({ createdAt: -1 });
    
    res.json({
      ...info?._doc,
      experiencias
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      mensaje: 'Error al obtener el currículum',
      error: error.message 
    });
  }
};

// Obtener solo información personal
exports.obtenerInfoPersonal = async (req, res) => {
  try {
    const info = await InformacionPersonal.findOne();
    
    if (!info) {
      return res.status(404).json({ 
        mensaje: 'No se encontró información personal' 
      });
    }
    
    res.json(info);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      mensaje: 'Error al obtener información personal',
      error: error.message 
    });
  }
};

// Actualizar información personal
exports.actualizarInfoPersonal = async (req, res) => {
  try {
    const { nombre, titulo, ubicacion, descripcion } = req.body;
    
    let info = await InformacionPersonal.findOne();
    
    if (!info) {
      // Si no existe, crear una nueva
      info = new InformacionPersonal({
        nombre,
        titulo,
        ubicacion,
        descripcion
      });
    } else {
      // Si existe, actualizar
      info.nombre = nombre || info.nombre;
      info.titulo = titulo || info.titulo;
      info.ubicacion = ubicacion || info.ubicacion;
      info.descripcion = descripcion || info.descripcion;
    }
    
    await info.save();
    res.json(info);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      mensaje: 'Error al actualizar información personal',
      error: error.message 
    });
  }
};

// Obtener todas las experiencias
exports.obtenerExperiencias = async (req, res) => {
  try {
    const experiencias = await Experiencia.find().sort({ createdAt: -1 });
    res.json(experiencias);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      mensaje: 'Error al obtener experiencias',
      error: error.message 
    });
  }
};

// Obtener una experiencia por ID
exports.obtenerExperienciaPorId = async (req, res) => {
  try {
    const experiencia = await Experiencia.findById(req.params.id);
    
    if (!experiencia) {
      return res.status(404).json({ 
        mensaje: 'Experiencia no encontrada' 
      });
    }
    
    res.json(experiencia);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      mensaje: 'Error al obtener experiencia',
      error: error.message 
    });
  }
};

// Crear nueva experiencia
exports.crearExperiencia = async (req, res) => {
  try {
    const { puesto, empresa, ubicacion, periodo, responsabilidades } = req.body;
    
    const nuevaExperiencia = new Experiencia({
      puesto,
      empresa,
      ubicacion,
      periodo,
      responsabilidades: responsabilidades || []
    });
    
    await nuevaExperiencia.save();
    res.status(201).json(nuevaExperiencia);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      mensaje: 'Error al crear experiencia',
      error: error.message 
    });
  }
};

// Actualizar experiencia existente
exports.actualizarExperiencia = async (req, res) => {
  try {
    const { puesto, empresa, ubicacion, periodo, responsabilidades } = req.body;
    
    const experiencia = await Experiencia.findByIdAndUpdate(
      req.params.id,
      {
        puesto,
        empresa,
        ubicacion,
        periodo,
        responsabilidades
      },
      { 
        new: true,           // Retorna el documento actualizado
        runValidators: true  // Ejecuta las validaciones del schema
      }
    );
    
    if (!experiencia) {
      return res.status(404).json({ 
        mensaje: 'Experiencia no encontrada' 
      });
    }
    
    res.json(experiencia);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      mensaje: 'Error al actualizar experiencia',
      error: error.message 
    });
  }
};

// Eliminar experiencia
exports.eliminarExperiencia = async (req, res) => {
  try {
    const experiencia = await Experiencia.findByIdAndDelete(req.params.id);
    
    if (!experiencia) {
      return res.status(404).json({ 
        mensaje: 'Experiencia no encontrada' 
      });
    }
    
    res.json({ 
      mensaje: 'Experiencia eliminada correctamente',
      experiencia
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      mensaje: 'Error al eliminar experiencia',
      error: error.message 
    });
  }
};