const fetch = window.fetch

document.querySelector('.submit').addEventListener('click', event => {
  event.preventDefault()

  fetch('/reservations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      name: document.querySelector('#reserve-name').value,
      phone: document.querySelector('#reserve-phone').value,
      email: document.querySelector('#reserve-email').value,
      id: document.querySelector('#reserve-unique-id').value
    })
  })
    .then(r => {
      window.location = './reservations'
    })
    .catch(e => console.error(e))
})
