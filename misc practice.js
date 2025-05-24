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

console.log(shapeFit(square1, 5, 3));
