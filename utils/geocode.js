const request = require('request')

// Take in an address,
// call out to the mapbox Geocoding Api,
// return the latitude and longitude
const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWVsbHlrYXNvbiIsImEiOiJjazgzaDRocTQwc2VyM2xwZ3R1YnByNHA0In0.Jwj7iJ53grclKzWd8EcRKw&limit=1'

  request({ url, json: true}, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services.', undefined)
    } else if (body.features.length === 0) {
      callback('unable to find location. try another search.', undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode