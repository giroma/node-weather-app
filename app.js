require('dotenv').config()
const request = require('request')


request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=${process.env.MAPS_API}`,
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body.results[0].formatted_address, undefined, 2));
})
