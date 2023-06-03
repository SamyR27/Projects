let player = {
    name: "sam",
    chips: 200
}

let cards = []
let sum = 0;
let hasblackjack = false
let isAlive = false;
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomcard() {
    let randomnumber  = Math.floor(Math.random() * 13) + 1
    if (randomnumber > 10) {
        return 10;
    } else if (randomnumber === 1) {
        return 11;
    } else {
        return randomnumber;
    }
}

function startgame() {
    isAlive = true;
    let firstcard = getRandomcard();
    let secondcard = getRandomcard();
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard;
    rendergame();
}

function rendergame() {
    sumEl.textContent = "sum: " + sum
    cardsEl.textContent = "cards: " 
    for ( let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if(sum<21) {
        message = "do you want more cards"
    } else if(sum === 21) {
        message = "WOOHOOOOO!! You have BLACKJACK"
        hasblackjack = true;
    } else {
        message = "you are out"
        isAlive = false
    }
    messageEl.textContent = message;
}

function newcard() {
    if (isAlive === true && hasblackjack === false) {
        let card = getRandomcard();
        sum += card
        cards.push(card)
        rendergame()
    }
}


