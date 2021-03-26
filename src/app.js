const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const forecastRouter = require('./routers/forecast');

app.use(cors());
app.use(bodyParser.json());
app.use(forecastRouter);


module.exports = app
