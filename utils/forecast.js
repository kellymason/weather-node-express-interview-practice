const request = require('request')
const accessKey = "6f59ecca90f84c41b3f08f63be20c53c"


// Take in latitude and longitude information, 
// call out to weatherstack api,
// return the forecast for that location
const forecast = ('todo') => {

  const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${lat},${long}&units=f`
  request({ url, json: true }, (error, { body }) => {
    // TODO
  })
}

module.exports = forecast
