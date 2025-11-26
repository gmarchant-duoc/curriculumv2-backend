const express = require('express');
const router = express.Router();
const curriculumController = require('../controllers/curriculum.controller');

// Rutas para el currículum completo
router.get('/curriculum', curriculumController.obtenerCurriculum);

// Rutas para información personal
router.get('/curriculum/info', curriculumController.obtenerInfoPersonal);
router.put('/curriculum/info', curriculumController.actualizarInfoPersonal);

// Rutas para experiencias
router.get('/curriculum/experiencias', curriculumController.obtenerExperiencias);
router.get('/curriculum/experiencias/:id', curriculumController.obtenerExperienciaPorId);
router.post('/curriculum/experiencias', curriculumController.crearExperiencia);
router.put('/curriculum/experiencias/:id', curriculumController.actualizarExperiencia);
router.delete('/curriculum/experiencias/:id', curriculumController.eliminarExperiencia);

module.exports = router;