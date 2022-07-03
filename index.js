
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let player = {
    name: "Per",
    chips: 145
}

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent  =player.name + ": $" + player.chips

function getRandomCard(){
    let randomCard =  Math.floor(Math.random()*13)+1
    if(randomCard > 10){
        return 10
    }else if(randomCard === 1){
        return 11
    }
    else{
        return randomCard
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards: " 
    for(let i = 0; i<cards.length; i++){
        cardEl.textContent += cards[i] +" "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <=20) {
        message = "Do u Want to draw new card?"
    } else if (sum ===21) {
        message = "You've got BlackJack!"
        hasBlackJack = true
    } else {
        message = "You're Out of the Game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack == false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}