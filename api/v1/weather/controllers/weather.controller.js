//const weatherService = require('../services/weather.service');
const config = require('../../../../config/config');
	class weatherController {

		static getWeatherForecast = async (req, res) => {

			const getActualForecast = async function(cityName) {
				try {
				const axios = require('axios');
				console.log('Weather API');
				
				const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${config.app_key}`;
				const result = await axios.get(url);
				//console.log(result.data);
				return result.data;
			}catch (err) {
				console.log(err);
				return;
			}

			}

			try {
				const reqData = req.body.city;
				let weatherData = {};
				for(let i = 0 ; i < reqData.length ; i++)  {
					weatherData[reqData[i]]  = await getActualForecast(reqData[i]);
				}
				
				res.json({
					status : true,
					statusCode : 200,
					message : "weather record fetched",
					data : weatherData
				})

			} catch (error) {
				console.log(error);
			}
		}
	}


	module.exports = weatherController;


