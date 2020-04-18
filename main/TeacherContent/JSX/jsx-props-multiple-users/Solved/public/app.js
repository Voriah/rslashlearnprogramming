const fetch = window.fetch

document.querySelector('#addUser').addEventListener('click', event => {
  event.preventDefault()
  fetch('/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      name: document.querySelector('#name').value,
      email: document.querySelector('#email').value,
      password: document.querySelector('#password').value,
      address: document.querySelector('#address').value
    })
  })
    .then(r => { window.location = './users' })
    .catch(e => console.error(e))
  document.querySelector('#name').value = ''
  document.querySelector('#email').value = ''
  document.querySelector('#password').value = ''
  document.querySelector('#address').value = ''
})
