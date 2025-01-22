const mongoose = require('mongoose');
const createError = require('http-errors');
const Class = require('../Models/Class.model');

module.exports = {
    getClasses: async(req, res, next) => {
        try
        {
            const results = await Class.find({}, {__v:0});
            res.send(results);
        } catch(error)
        {
            console.log(error.message);
        }
    }
};