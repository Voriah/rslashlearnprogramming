const $ = window.$
let cardsArr = []
let suitArr = ['S', 'C', 'D', 'H']

// creates all numbered cards
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

// creates all non-numbered cards
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

// deck shuffler
function shuffle () {
  cardsArr.sort(function () {
    return 0.5 - Math.random()
  })
}

shuffle()

// puts cards on page randomly
for (let i = 0; i < cardsArr.length; i++) {
  $('.playArea').append(cardsArr[i])
  shuffle()
}

// put JQuery flip logic here...
$('.flipcard').flip()
$('.flipcard').flip(true)

let firstcard = ''
let secondcard = ''
let isFirst = false

$(document).on('click', '.flipcard', function () {
// your game logic here
  let card = $(this).children()
  let cardfront = card[0]

  if (isFirst === false) {
    firstcard = $(cardfront).attr('data-card')
    isFirst = true
  } else {
    secondcard = $(cardfront).attr('data-card')
    isFirst = false
    // game logic
  }
// Hint: hmmm this works for the containing div...is there a
//       jquery method for grabbing the children of an element?
// Another Hint:
})

