const app = require('./app')
const port = 3001

const accessKey = "6f59ecca90f84c41b3f08f63be20c53c"
const weather = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${lat},${long}&units=f`
  request({ url, json: true }, (error, { body }) => {
    callback(undefined, body)
  })
}

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`)
})
