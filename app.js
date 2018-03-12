require('dotenv').config()
const request = require('request')
const yargs = require('yargs')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=${process.env.MAPS_API}`,
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body.results[0].formatted_address, undefined, 2));
  console.log('latitude:',JSON.stringify(body.results[0].geometry.location.lat, undefined, 2));
  console.log('longitude:',JSON.stringify(body.results[0].geometry.location.lng, undefined, 2));
})
