const mongoose = require('mongoose');
const createError = require('http-errors');
const Horario = require('../Models/Horario.model');

module.exports = {
    getHorarios: async(req, res, next) => {
        try
        {
            const results = await Horario.find({}, {__v:0});
            res.send(results);
        } catch(error)
        {
            console.log(error.message);
        }
    }
}