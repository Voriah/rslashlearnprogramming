document.querySelector('#submitUser').addEventListener('click', event => {
  event.preventDefault()
  const user = {
    email: document.querySelector('#email').value,
    password: document.querySelector('#password').value
  }
  console.log(user)
})
