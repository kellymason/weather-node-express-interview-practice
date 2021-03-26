const request = require('request')
const accessKey = "6f59ecca90f84c41b3f08f63be20c53c"
const forecast = (lat, long, callback) => {
  // const url = `https://api.darksky.net/forecast/1dcc420f0de3c916eb0e1607cdc680b6/${lat},${long}`
  // The darksky api will stop working at some point in the future,
  // at which point I should set up an api key with weatherstack and use the url below:
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
