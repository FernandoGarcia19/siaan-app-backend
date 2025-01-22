const express = require('express');
const AppRouter = express.Router();
const ClassController = require('../Controllers/Class.controller');
const HorarioController = require('../Controllers/Horario.controller');

AppRouter.get('/Classes/', ClassController.getClasses);
AppRouter.get('/Horarios/', HorarioController.getHorarios);

module.exports = AppRouter;