class Shape {
  static count = 0;

  constructor() {
    Shape.count++;
  }

  static getCount() {
    return Shape.count;
  }

  area() {
    throw new Error("Area method must be implemented");
  }

  perimeter() {
    throw new Error("Perimeter method must be implemented");
  }

  toString() {
    return `
${this.constructor.name}
Area: ${this.area()}
Perimeter: ${this.perimeter()}
`;
  }
}


class Rectangle extends Shape {
  static instanceCreated = false;

  constructor(width, height) {
    if (Rectangle.instanceCreated) {
      throw new Error("Only one Rectangle is allowed!");
    }
    super();
    this.width = width;
    this.height = height;
    Rectangle.instanceCreated = true;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

class Square extends Shape {
  static instanceCreated = false;

  constructor(side) {
    if (Square.instanceCreated) {
      throw new Error("Only one Square is allowed!");
    }
    super();
    this.side = side;
    Square.instanceCreated = true;
  }

  area() {
    return this.side ** 2;
  }

  perimeter() {
    return 4 * this.side;
  }
}


class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

const rect = new Rectangle(10, 5);
const square = new Square(4);
const circle1 = new Circle(7);
const circle2 = new Circle(3);
// const anotherSquare = new Square(5); // error

console.log(rect.toString());
console.log(square.toString());
console.log(circle1.toString());
console.log(circle2.toString());
// console.log(anotherSquare.toString());

console.log("Total created objects:", Shape.getCount());
