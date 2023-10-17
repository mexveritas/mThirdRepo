let sailboats = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for (let boat of sailboats) {
    boat.display();
    boat.move();
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    let x = mouseX;
    let y = mouseY;
    sailboats.push(new Sailboat(x, y));
  }
}

class Sailboat {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.mastHeight = 30;
    this.boatWidth = 60;
    this.boatHeight = 15;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  display() {
    fill(this.r, this.g, this.b);
    // Draw sail
    triangle(this.x, this.y, this.x, this.y - this.mastHeight, this.x + this.boatWidth / 2, this.y - this.mastHeight);
    // Draw boat
    rect(this.x - this.boatWidth / 2, this.y, this.boatWidth, this.boatHeight);
  }

  move() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
}