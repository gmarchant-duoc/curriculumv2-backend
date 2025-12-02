



/*

let curriculum = require('../data/curriculum.data');

// Obtener todos los datos del currículum
exports.obtenerCurriculum = (req, res) => {
  res.json(curriculum);
};

// Obtener solo información personal
exports.obtenerInfoPersonal = (req, res) => {
  const { nombre, titulo, ubicacion, descripcion } = curriculum;
  res.json({ nombre, titulo, ubicacion, descripcion });
};

// Obtener todas las experiencias
exports.obtenerExperiencias = (req, res) => {
  res.json(curriculum.experiencias);
};

// Obtener una experiencia por ID
exports.obtenerExperienciaPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const experiencia = curriculum.experiencias.find(exp => exp.id === id);
  
  if (experiencia) {
    res.json(experiencia);
  } else {
    res.status(404).json({ mensaje: 'Experiencia no encontrada' });
  }
};

// Crear nueva experiencia
exports.crearExperiencia = (req, res) => {
  const nuevaExperiencia = {
    id: curriculum.experiencias.length + 1,
    puesto: req.body.puesto,
    empresa: req.body.empresa,
    ubicacion: req.body.ubicacion,
    periodo: req.body.periodo,
    responsabilidades: req.body.responsabilidades || []
  };
  
  curriculum.experiencias.push(nuevaExperiencia);
  res.status(201).json(nuevaExperiencia);
};

// Actualizar experiencia existente
exports.actualizarExperiencia = (req, res) => {
  const id = parseInt(req.params.id);
  const index = curriculum.experiencias.findIndex(exp => exp.id === id);
  
  if (index !== -1) {
    curriculum.experiencias[index] = {
      ...curriculum.experiencias[index],
      ...req.body,
      id: id
    };
    res.json(curriculum.experiencias[index]);
  } else {
    res.status(404).json({ mensaje: 'Experiencia no encontrada' });
  }
};

// Eliminar experiencia
exports.eliminarExperiencia = (req, res) => {
  const id = parseInt(req.params.id);
  const index = curriculum.experiencias.findIndex(exp => exp.id === id);
  
  if (index !== -1) {
    curriculum.experiencias.splice(index, 1);
    res.json({ mensaje: 'Experiencia eliminada correctamente' });
  } else {
    res.status(404).json({ mensaje: 'Experiencia no encontrada' });
  }
};

// Actualizar información personal
exports.actualizarInfoPersonal = (req, res) => {
  const { nombre, titulo, ubicacion, descripcion } = req.body;
  
  if (nombre) curriculum.nombre = nombre;
  if (titulo) curriculum.titulo = titulo;
  if (ubicacion) curriculum.ubicacion = ubicacion;
  if (descripcion) curriculum.descripcion = descripcion;
  
  res.json({ 
    nombre: curriculum.nombre, 
    titulo: curriculum.titulo, 
    ubicacion: curriculum.ubicacion, 
    descripcion: curriculum.descripcion 
  });
};

*/