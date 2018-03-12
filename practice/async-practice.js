console.log('starting');
setTimeout(() => {
  console.log('inside 1');
},1000)
setTimeout(() => {
  console.log('inside 2');
},0)

console.log('finishing');
