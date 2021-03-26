const request = require('request')
const accessKey = "6f59ecca90f84c41b3f08f63be20c53c"
const forecast = (lat, long, callback) => {

  const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${lat},${long}&units=f`
  request({ url, json: true }, (error, { body }) => {
    if(error) {
      callback('Unable to complete request.', undefined)
    } else if (body.error) {
      callback('Unable to find that location', undefined)
    } else {
      const currentForecast = body.currently;
      const forecastMsg = `${ body.daily.data[0].summary} It is currently ${currentForecast.temperature} degrees out. There is a ${currentForecast.precipProbability * 100}% chance of rain.`
      callback(undefined, forecastMsg)
    }
  })
}

module.exports = forecast
