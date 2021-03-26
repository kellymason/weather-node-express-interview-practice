const express = require('express')
const router = new express.Router()
const forecast = require('../../utils/forecast')
const geocode = require('../../utils/geocode')

router.get('/forecast', (req, res) => {
const myforecastplace = req.query.location;

if (!myforecastplace) {
  console.log('Please provide a valid location')
} else {
	geocode(myforecastplace, (error, { latitude, longitude, myforecastplace}) => {
		forecast(latitude, longitude, (error, forecastData) => {
	
		console.log(myforecastplace)
		console.log(forecastData);
		})
	})
}
})


module.exports = router
