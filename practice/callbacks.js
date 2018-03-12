let getUser = (id, callback) => {
  let user = {
    id: id,
    name: 'markus'
  }
  setTimeout(() => {
    callback(user)
  }, 1000)
}

getUser(31, (userObject) => {
  console.log(userObject);
})
