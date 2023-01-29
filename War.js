//WAR


// Create global Player1 & Player 2  (score, hand - array)

const Player1 = [];
const Player2 = [];

let userscore = 26;
let dealerscore = 26;


// declare card elements for deck of cards
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];
const ranks = [1,2,3,4,5,6,7,8,9,10,11,12,13];


// empty array to contain cards
let deck = [];

// create a deck of cards and add a rank after for each card
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i], Rank: ranks[x] };

        deck.push(card);
    }
}
console.log(deck);


// program to shuffle the deck of cards

for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;


}



/* Render deck - pass to both players 
*/

const renderDeck = (div, arr) => {
    div.innerHTML = ''
    for(let i = 0; i < arr.length; i++)
    {
        let card = document.createElement("div")
        let value = document.createElement("div")
        let suit = document.createElement("div")
        card.className = "card"
        value.className = "value"
        suit.className = "suit " + arr[i].Suit

        value.innerHTML = arr[i].Value
        card.appendChild(value)
        card.appendChild(suit)

        div.appendChild(card)

        console.log(renderDeck);

    }
}

// Function Deal

console.log('The Dealt cards are:');

// display 2 results
for (let i = 0; i < 52; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
}








//Create the score label function
function createScoreLabel(x,y) {
    this.score = 0;
    this.Player1 = x;
    this.Player2 = y;
    this.draw = function() {
        ctx = gameCanvas.context;
        ctx.font = "25px Marker Felt";
        ctx.fillStyle = "black";
        console.log(this.text, this.Player1, this.Player2);
    }
}

  


//Keeping Score


     

    // checking score
    var dealerturns = "";
    var i;
    for(i = 0; i < Player1.length; i++) {
        dealerturns = dealerturns + Player1[i] + ", ";
    }

    var userturns = "";
    var j;
    for(j = 0; j < Player2.length; j++) {
        userturns = userturns + Player2[j] + ", ";
    }

    chekingscores();

// adding score
function ifqual() {
    var Player2 = Math.floor(Math.random() * 13 + 2);
    Player2.push(Player2);

    var Player1 = Math.floor(Math.random() * 13 + 2);
    Player1.push(Player1);

    if(Player2 === Player1) {
        ifqual();

    } else if(Player2 > Player1) {
        userscore = userscore +1;
        dealerscore = dealerscore -1;
    } else if(dealerscore > userscore) {    
        dealerscore = dealerscore +1;
        userscore = userscore -1;
    }
}

/*
Check to see who won
if userscore is less than Dealerscore than Dealer wins
if dealerscore is less than userscore than User wins
if tie nothing.
*/
function chekingscores() {
    if(userscore <= 0) {
        userscore = 0;
        alert("Dealer Win!");
 
    } else if(dealerscore <= 0) {
        userscore = 0;
        alert("User Win!");

    }
}
