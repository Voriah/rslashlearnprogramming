// David has some fruit
// When he got the bag of fruit, he gave half to Jessica and half to Gene (Split the array in half and send first half to Jessica and second half to Gene)
// Jessica ate the apple and the grapes, then gave the rest of hers to Anthony (Remove the apple and grapes, send remaining Array to Anthony)
// Gene has no self control and ate all the fruit he had except the tomato, then gave that tomato to Desiree (Send just the tomato to Desiree)
// Does Anthony only have the orange, banana, and lemon? (Log the array Anthony recieves)
// Does Desiree only have the tomato? (Log the fruit Desiree recieves)

function David () {
  let fruit = ['apple', 'orange', 'banana', 'grapes', 'lemon', 'mango', 'pineapple', 'kiwi', 'lime', 'tomato']
  Jessica(fruit.splice(0, fruit.length / 2))
  Gene(fruit)
}

function Jessica (fruit) {
}
function Gene (fruit) {
}

function Anthony () {
}

function Desiree () {
}

David()
