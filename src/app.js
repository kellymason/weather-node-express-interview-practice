// const geocode = require('./utils/geocode')
// const forecast = require('./utils/forecast')
// const location = process.argv[2]

// if (!location) {
//   console.log('Please provide a valid location')
// } else {
//   geocode(location, (error, { latitude, longitude, location}) => {
//     if (error) {
//       return console.log(error)
//     }
//     forecast(latitude, longitude, (error, forecastData) => {
//       if (error) {
//         return console.log(error)
//       }
  
//       console.log(location)
//       console.log(forecastData)
//     })
//   })
// }

const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const forecastRouter = require('./routers/forecast');

app.use(cors());
app.use(bodyParser.json());
app.use(forecastRouter);


module.exports = app
