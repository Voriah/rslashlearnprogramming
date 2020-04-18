const $ = window.$
const alert = window.alert
let cardsArr = []
let suitArr = ['S', 'C', 'D', 'H']

for (let i = 2; i < 11; i++) {
  cardsArr.push(`
    <div class="flipcard">
      <img class="card front" data-card="${i + 'C'}" src="assets/images/${i + 'C'}.png" alt="">
      <img class="card back" src="assets/images/red_back.png" alt="">
    </div>
  `)
  cardsArr.push(`
    <div class="flipcard">
      <img class="card front" data-card="${i + 'D'}" src="assets/images/${i + 'D'}.png" alt="">
      <img class="card back" src="assets/images/red_back.png" alt="">
    </div>
  `)
  cardsArr.push(`
    <div class="flipcard">
      <img class="card front" data-card="${i + 'H'}" src="assets/images/${i + 'H'}.png" alt="">
      <img class="card back"  src="assets/images/red_back.png" alt="">
    </div>
  `)
  cardsArr.push(`
    <div class="flipcard">
      <img class="card front" data-card="${i + 'S'}" src="assets/images/${i + 'S'}.png" alt="">
      <img class="card back" src="assets/images/red_back.png" alt="">
    </div>
  `)
}

for (let i = 0; i < suitArr.length; i++) {
  cardsArr.push(`
    <div class="flipcard">
      <img class="card front" data-card="${'A' + suitArr[i]}" src="assets/images/A${suitArr[i]}.png" alt="">
      <img class="card back" src="assets/images/red_back.png" alt="">
    </div>
  `)
  cardsArr.push(`
    <div class="flipcard">
      <img class="card front" data-card="${'J' + suitArr[i]}" src="assets/images/J${suitArr[i]}.png" alt="">
      <img class="card back" src="assets/images/red_back.png" alt="">
    </div>
  `)
  cardsArr.push(`
    <div class="flipcard">
      <img class="card front" data-card="${'Q' + suitArr[i]}" src="assets/images/Q${suitArr[i]}.png" alt="">
      <img class="card back" src="assets/images/red_back.png" alt="">
    </div>
  `)
  cardsArr.push(`
    <div class="flipcard">
      <img class="card front" data-card="${'K' + suitArr[i]}" src="assets/images/K${suitArr[i]}.png" alt="">
      <img class="card back" src="assets/images/red_back.png" alt="">
    </div>
  `)
}

function shuffle () {
  cardsArr.sort(function () {
    return 0.5 - Math.random()
  })
}

shuffle()

for (let i = 0; i < cardsArr.length; i++) {
  $('.playArea').append(cardsArr[i])
  shuffle()
}

$('.flipcard').flip()
$('.flipcard').flip(true)

let firstCard = ''
let secondCard = ''
let isFirstCard = false

$(document).on('click', '.flipcard', function () {
  let card = $(this).children()
  if ($(card[0]).css('z-index') === '0') {
    if (!isFirstCard) {
      firstCard = $(card[0]).attr('data-card')
      isFirstCard = true
    } else {
      secondCard = $(card[0]).attr('data-card')
      isFirstCard = false
      setTimeout(function () {
        if (firstCard === secondCard) {
          alert('You Win!')
        } else {
          alert('You Lose!')
          $('.flipcard').flip(true)
        }
      }, 1000)
    }
  }
})
