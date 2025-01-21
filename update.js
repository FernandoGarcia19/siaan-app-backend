const mongoose = require('mongoose');
const Class = require('./Models/Class.model'); 
const Horario = require('./Models/Horario.model'); 
const jsonData = require('./data.json'); 
const dotenv = require('dotenv').config();

async function parseJsonData() {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
        dbName: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS
    }).then(() => {
        console.log('MongoDB HAS CONNECTED....');
    });

    for (const item of jsonData) {
      // Create the Class document
      const classDoc = await Class.create({
        sigla: item.Sigla,
        paralelo: parseInt(item.P, 10), // Convert to Number
        asignatura: item.Asignatura.trim(),
        cupos: parseInt(item.Cupo, 10), // Convert to Number
        docente: item.Horarios[0]?.Docente || '', // Assuming all horarios have the same docente
      });

      const horarioIds = [];

      for (const horario of item.Horarios) {
        // Create Horario document and link it to the Class
        const horarioDoc = await Horario.create({
          dia: horario['Día'],
          horas: horario['Horas'],
          aula: horario['Aula'],
          classId: classDoc._id // Link to the parent class
        });

        horarioIds.push(horarioDoc._id);
      }

      // Update Class with the array of Horario IDs
      classDoc.horarios = horarioIds;
      await classDoc.save();
    }

    console.log('Data import complete!');
  } catch (error) {
    console.error('Error parsing JSON data:', error);
  } finally {
    mongoose.connection.close();
  }
}
parseJsonData();
