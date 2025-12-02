// scripts/seed.js

const mongoose = require('mongoose');
const InformacionPersonal = require('../models/InformacionPersonal');
const Experiencia = require('../models/Experiencia');
require('dotenv').config();

const seedDatabase = async () => {
  try {
    // Conectar a MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Conectado a MongoDB');

    // Limpiar datos existentes
    await InformacionPersonal.deleteMany({});
    await Experiencia.deleteMany({});
    console.log('🗑️  Datos anteriores eliminados');

    // Crear información personal
    const info = new InformacionPersonal({
      nombre: 'Juan Pérez',
      titulo: 'Desarrollador Full Stack',
      ubicacion: 'Santiago, Chile',
      descripcion: 'Desarrollador apasionado por crear soluciones tecnológicas innovadoras con experiencia en React y Node.js.'
    });
    await info.save();
    console.log('✅ Información personal creada');

    // Crear experiencias
    const experiencias = [
      {
        puesto: 'Desarrollador Frontend',
        empresa: 'Tech Solutions',
        ubicacion: 'Santiago, Chile',
        periodo: '2022 - Presente',
        responsabilidades: [
          'Desarrollo de aplicaciones web con React',
          'Implementación de diseños responsivos',
          'Optimización de rendimiento'
        ]
      },
      {
        puesto: 'Desarrollador Junior',
        empresa: 'StartUp Digital',
        ubicacion: 'Valparaíso, Chile',
        periodo: '2020 - 2022',
        responsabilidades: [
          'Mantenimiento de aplicaciones existentes',
          'Desarrollo de nuevas funcionalidades',
          'Testing y debugging'
        ]
      }
    ];

    await Experiencia.insertMany(experiencias);
    console.log('✅ Experiencias creadas');

    console.log('🎉 Base de datos poblada exitosamente');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

seedDatabase();