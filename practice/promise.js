let asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a+b)
      } else {
        reject('arguments must be numbers')
      }
    }, 1500)
  })
}

// let somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('hey it worked')
//     reject('unable to fulfill promise')
//   }, 2500)
// })
//
// somePromise.then((message) => {
//   console.log('success', message);
// }, (errorMessage) => {
//   console.log('Error', errorMessage);
// })

asyncAdd(5,7).then((res) => {
  console.log('result:', res);
  return asyncAdd(res, '33')
}).then((result) => {
  console.log('should be 45', result);
}).catch((error) => {
  console.log(error);
})
