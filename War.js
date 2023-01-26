//WAR


// Create global Player1 & Player 2

var Player1 = "Player_1";
var Player2 = "Player_2";


// program to shuffle the deck of cards

// declare card elements
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

// empty array to contain cards
let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}

// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}
// Function Deal

console.log('The first two cards are:');

// display 2 results
for (let i = 0; i < 2; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
}

//Create the score label function
function createScoreLabel(x,y) {
    this.score = 0;
    this.x = x;
    this.y = y;
    this.draw = function() {
        ctx = gameCanvas.context;
        ctx.font = "25px Marker Felt";
        ctx.fillStyle = "black";
        console.log(this.text, this.x, this.y);
    }
}



//Keeping Score

let score = 0;

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText(`Score: ${score}`, 8, 20);
  }


//Global for keeping score
function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        const b = bricks[c][r];
        if (b.status === 1) {
          if (
            x > b.x &&
            x < b.x + brickWidth &&
            y > b.y &&
            y < b.y + brickHeight
          ) {
            dy = -dy;
            b.status = 0;
            score++;
            if (score === brickRowCount * brickColumnCount) {
              alert("YOU WIN, CONGRATULATIONS!");
              document.location.reload();
              clearInterval(interval); // Needed for Chrome to end game
            }
          }
        }
      }
    }
  }





//Func Play game - for loop


//Compare Player1 vs Player2





// Break hard return <br> to return winner



