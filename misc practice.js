// practice loosely based on Pinterest question
// I froze up and didn't know how to implement classes into my function.

class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    console.log(this.sides * this.sideLength);
  }
}

let triangle1 = new Shape("triangle", 3, 3);
let square1 = new Shape("square", 4, 5);

function shapeFit(shape, height, width) {
  if (shape.sides > height || shape.sides > width) {
    return false;
  }
  return true;
}

//console.log(shapeFit(square1, 5, 3));

let SUITS = ['Clubs', 'Spades', 'Hearts', 'Diamonds']
let VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']

class Card {
  constructor (suit, value){
    this.suit = suit
    this.value = value
  }

  static random(){
    const suit = SUITS[Math.floor(Math.random() * SUITS.length)]
    const value = VALUES[Math.floor(Math.random() * VALUES.length)]
    return new Card(suit, value)
  }
}

function buildDeck () {
  let deck = [];
  for (let suit of SUITS) {
    for (let value of VALUES){
      deck.push(new Card(suit, value))
    }
  }
  return deck
}

console.log(buildDeck())
