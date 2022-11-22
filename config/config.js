const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })

module.exports = {
  node_env: process.env.NODE_ENV || 'development',
  host:process.env.HOST || 'localhost',
  port: process.env.PORT || 4008,
  app_key: process.env.APP_KEY,
  weather_api_url : process.env.WEATHER_API_URL
}