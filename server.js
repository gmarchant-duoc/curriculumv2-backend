const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const curriculumRoutes = require('./routes/curriculum.routes');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors({
  origin: 'http://localhost:3000'  // URL del frontend React
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.json({ 
    mensaje: 'Bienvenido a la API de Currículum',
    endpoints: {
      curriculum: 'GET /api/curriculum',
      info: 'GET /api/curriculum/info',
      experiencias: 'GET /api/curriculum/experiencias'
    }
  });
});

// Usar las rutas
app.use('/api', curriculumRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor backend corriendo en http://localhost:${PORT}`);
  console.log(`📋 API disponible en http://localhost:${PORT}/api/curriculum`);
});