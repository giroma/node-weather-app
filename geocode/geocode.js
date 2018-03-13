const request = require('request')

let geocodeAddress = (terminalAddress, callback) => {

  let address = encodeURIComponent(terminalAddress)//encoded for url request

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.MAPS_API}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('unable to connect')
    } else if (body.status === 'ZERO_RESULTS') {
      callback('no results for this address')
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        lattitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      })
    }
  })
}

module.exports = {
  geocodeAddress
}
