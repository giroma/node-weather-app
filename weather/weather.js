const request = require('request')

let getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${process.env.DARKSKY_API}/${lat},${lng}?units=auto`,
    json: true
  }, (error, response, body) => {
    if (!error  && response.statusCode == '200') {
      callback(undefined, {
        temperature: Math.round(body.currently.temperature),
        apparentTemperature: Math.round(body.currently.apparentTemperature)
      })
    } else {
      callback('unable to connect')
    }
  })
}

module.exports = {
  getWeather
}
