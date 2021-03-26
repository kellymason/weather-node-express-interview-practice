const express = require('express')
const router = new express.Router()


router.get('/forecast', (req, res) => {
  // TODO: take in location information and return the forecast here.
  res.send('It is cold everywhere.');
})

module.exports = router
