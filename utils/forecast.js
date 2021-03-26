const request = require('request')
const accessKey = "6f59ecca90f84c41b3f08f63be20c53c"


const forecast = (lat, long, callback) => {

  const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${lat},${long}&units=f`
  request({ url, json: true }, (error, { body }) => {
    if(error) {
      callback('Unable to complete request.', undefined);
    } else if (body.error) {
      callback('Unable to find that location', undefined);
    } else {
      const currentForecast = body;
      callback(undefined, currentForecast)
    }
  })
}

module.exports = forecast
