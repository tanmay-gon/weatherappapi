const express = require('express');
const routes = express.Router();
const weather = require('../api/v1/weather/routes/weather.route')

routes.use('/forecast', weather);

module.exports = routes;
