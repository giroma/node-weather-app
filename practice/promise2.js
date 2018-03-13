require('dotenv').config({path:'../.env'})
const request = require('request')

let geocodeAddress = (terminalAddress) => {
  return new Promise((resolve, reject) => {

    let address = encodeURIComponent(terminalAddress)//encoded for url request
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.MAPS_API}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('unable to connect')
      } else if (body.status === 'ZERO_RESULTS') {
        reject('no results for this address')
      } else if (body.status === 'REQUEST_DENIED') {
        reject('request denied')
      } else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          lattitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        })
      }
    })
  })
}

geocodeAddress('90210').then((location) => {
  console.log(location);
}, (errorMessage) => {
  console.log(errorMessage);
})
