const fetch = window.fetch

document.querySelector('#addBook').addEventListener('click', event => {
  event.preventDefault()
  fetch('/books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      id: document.querySelector('#bookTitle').value,
      title: document.querySelector('#bookTitle').value,
      author: document.querySelector('#bookAuthor').value,
      pages: document.querySelector('#bookPages').value,
      currentPage: document.querySelector('#currentPage').value,
      isRead: document.querySelector('#readBefore').checked
    })
  })
    .then(r => {
      console.log(r)
      document.querySelector('#bookTitle').value = ''
      document.querySelector('#bookAuthor').value = ''
      document.querySelector('#bookPages').value = ''
      document.querySelector('#currentPage').value = ''
      document.querySelector('#readBefore').checked = false
    })
    .catch(e => console.error(e))
})
