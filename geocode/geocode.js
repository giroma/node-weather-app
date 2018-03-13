const request = require('request')

let geocodeAddress = (terminalAddress) => {

  let address = encodeURIComponent(terminalAddress)//encoded for url request

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.MAPS_API}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      console.log('unable to connect');
    } else if (body.status === 'ZERO_RESULTS') {
      console.log('no results for this address');
    } else if (body.status === 'OK') {
      console.log(JSON.stringify(body.results[0].formatted_address, undefined, 2));
      console.log('latitude:',JSON.stringify(body.results[0].geometry.location.lat, undefined, 2));
      console.log('longitude:',JSON.stringify(body.results[0].geometry.location.lng, undefined, 2));
    }
  })
}

module.exports = {
  geocodeAddress
}
