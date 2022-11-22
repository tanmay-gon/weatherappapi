const express = require('express');
const routes = express.Router();
const weatherController = require('../controllers/weather.controller');

routes.post('/', weatherController.getWeatherForecast);

module.exports = routes;